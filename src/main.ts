import templateCompiler from "./core/template.compiler.ts";
import metaDataRegistry from "./core/meta-data-registry.ts";
import {AppComponent} from "./app/app.component.ts";
import {InsultComponent} from "./insults/insult.component.ts";
import {ComplimentComponent} from "./compliments/compliment.component.ts";

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
    // This is really ugly, but required in order to get the decorator to work. Vite treeshake removes unused import.
    // This is one of the reasons why Angular initially works with modules.
    // Which we will do in the next commit (AppModule, and using standalone)
    [AppComponent, InsultComponent, ComplimentComponent].forEach(() => {});

    const appElement = document.getElementById('app');

    if(appElement){
        await renderComponent(appElement, 'app-root')
    }
}


bootstrapApp();