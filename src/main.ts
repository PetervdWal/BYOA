import {InsultComponent} from "./insults/insult.component.ts";

function bootstrapApp(){
    const appElement = document.getElementById('app');

    if(appElement){
        const component = new InsultComponent();
        component.render(appElement);
    }
}


bootstrapApp();