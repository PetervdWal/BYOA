import metaDataRegistry from "../meta-data-registry.ts";
import {ComponentConstructor} from "../types/ComponentAPI.ts";

export function Component(config:{selector: string, templateUrl: string}){

    return function(target: ComponentConstructor){
        target.selector = config.selector;
        target.templateUrl = config.templateUrl;
        metaDataRegistry.register(config.selector, {
            selector: config.selector,
            templateUrl: config.templateUrl,
            componentClass: target
        })
    }
}