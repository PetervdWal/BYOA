import {defineConfig} from "vite";
import * as path from "path";
import * as fs from "fs";

export default defineConfig(() => {
    const registry: Map<string, string> = new Map<string, string>();
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
                        const matches = code.match(templateUrlRegex)
                        if(matches){
                            const relativeTemplateUrl = matches[1]
                            const componentDirectoryName = path.dirname(id);
                            registry.set(matches[1], path.resolve(componentDirectoryName, relativeTemplateUrl));
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

                                const originalPath = registry.get(path)

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