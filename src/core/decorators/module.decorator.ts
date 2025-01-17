import {ModuleConstructor} from "../types/ComponentAPI.ts";

export function Module(config: {
    declarations: any[]
}){
    return function(target: ModuleConstructor){
        console.log('Module decorator', target);
        const declarations = config.declarations;

        declarations.forEach((component: any) => {
            if(!component.selector || !component.templateUrl){
                throw new Error(`invalid component, ${component.name} missing a selector or templateURL. Check if they exist in the @Component decorator?`)
            }
            console.log(component.selector);
        })
    }
}