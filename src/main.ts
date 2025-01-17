import templateCompiler from "./core/template.compiler.ts";
import metaDataRegistry from "./core/meta-data-registry.ts";
import {AppModule} from "./app/app.module.ts";

async function renderComponent(targetHTML: HTMLElement, selector: string) {
    if(targetHTML){
        console.log(metaDataRegistry);

        const metaDataApp = metaDataRegistry.getMetaData(selector);
        console.log('Compiling data for metaDataApp', metaDataApp );
        if(metaDataApp){
            const template =  await templateCompiler.compile(metaDataApp.templateUrl)
            targetHTML.insertAdjacentHTML("beforeend", template)
        }
    }
}

async function bootstrapApp(){
    //init AppModule
    new AppModule();

    const appElement = document.getElementById('app');
    if(appElement){
        await renderComponent(appElement, 'app-root')
    }
}


bootstrapApp();