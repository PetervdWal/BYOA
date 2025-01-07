import {InsultComponent} from "./insults/insult.component.ts";
import templateCompiler from "./core/template.compiler.ts";
import metaDataRegistry from "./core/meta-data-registry.ts";
import {ComplimentComponent} from "./compliments/compliment.component.ts";

async function bootstrapApp(){
    const appElement = document.getElementById('app');

    if(appElement){
        const component = new InsultComponent();
        const bComponent = new ComplimentComponent();

        const metaData = metaDataRegistry.getMetaData('insult-component');
        if(metaData){
            const template =  await templateCompiler.compile(metaData.templateUrl)
            component.render(appElement, template);
        }

        const complimentMetaData = metaDataRegistry.getMetaData('compliment-component');
        if(complimentMetaData){
            const template =  await templateCompiler.compile(complimentMetaData.templateUrl)
            bComponent.render(appElement, template);
        }

    }
}


bootstrapApp();