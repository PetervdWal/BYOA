import {defineConfig} from "vite";
import * as path from "path";
import * as fs from "fs";

export default defineConfig({
    server: {
        fs: {
            strict: false
        }
    },
    build:{
        rollupOptions: {
            input: {
                main: 'src/main.ts'
            }
        }
    },
    plugins: [
        {
            name: 'serve-html',
            configureServer(server){
                server.middlewares.use(
                    (req, res, next) => {
                    if(req.originalUrl?.endsWith('.html')){

                        const htmlFilPath = `src\\insults\\${req.originalUrl}`;
                        const fullPath = path.resolve(htmlFilPath);
                        if(fs.existsSync(fullPath)){
                            res.setHeader('Content-Type', 'text/html');
                            res.end(fs.readFileSync(fullPath));
                            return;
                        }
                    }
                    next();
                })
            }
        }
    ]
})