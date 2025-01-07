import {defineConfig} from "vite";
import * as path from "path";
import * as fs from "fs";
import metaDataRegistry from "./src/core/meta-data-registry";

export default defineConfig(() => {
    return {
        root: 'src',
            server: {
        fs: {
            strict: false
        }
    },
        build:{
            outDir: "../dist",

        },
        plugins: [
            {
                name: 'component-registry',
                transform: (code, id) => {
                    console.info('Building file registry...', __dirname);
                    if(id.endsWith('component.ts')){
                        const templateUrlRegex =/templateUrl:\s*['"](.*?)['"]/
                        const templateMatches = code.match(templateUrlRegex)
                        const selectorRegex = /selector:\s*['"](.*?)['"]/
                        const selectorMatches = code.match(selectorRegex)
                        if(templateMatches && selectorMatches){

                            const relativeTemplateUrl = templateMatches[1]
                            const selector = selectorMatches[1];
                            const componentDirectoryName = path.dirname(id);
                            metaDataRegistry.register(selector, {
                                selector,
                                templateUrl: relativeTemplateUrl,
                                componentClass: Object,
                                absoluteUrl: path.resolve(componentDirectoryName, relativeTemplateUrl)
                            });
                        }

                    }
                    return {code};
                }
            },
            {
                name: 'serve-html',
                configureServer(server){
                    server.middlewares.use(
                        (req, res, next) => {
                            if(req.originalUrl?.endsWith('.html')){
                                const path = `.${req.originalUrl}`
                                console.info('Attempting to get from registry', path)

                                const originalPath = metaDataRegistry.getComponentByRelativeUrl(path)

                                // Resolve the file path based on the request
                                console.log('Attempting to serve:', originalPath);
                                if(originalPath && fs.existsSync(originalPath)){
                                    res.setHeader('Content-Type', 'text/html');
                                    res.end(fs.readFileSync(originalPath));
                                    return;
                                }
                            }
                            next();
                        })
                }
            }
        ]
    }
})