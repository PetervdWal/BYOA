import {InsultComponent} from "./insults/insult.component.ts";
import templateCompiler from "./core/template.compiler.ts";
import metaDataRegistry from "./core/meta-data-registry.ts";

async function bootstrapApp(){
    const appElement = document.getElementById('app');

    if(appElement){
        const component = new InsultComponent();

        const metaData = metaDataRegistry.getMetaData('insult-component');
        if(metaData){
            const template =  await templateCompiler.compile(metaData.templateUrl)
            component.render(appElement, template);
        }

    }
}


bootstrapApp();