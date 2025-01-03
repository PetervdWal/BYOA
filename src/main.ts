import {InsultComponent} from "./insults/insult.component.ts";

async function bootstrapApp(){
    const appElement = document.getElementById('app');

    if(appElement){
        const component = new InsultComponent();
        await component.render(appElement);
    }
}


bootstrapApp();