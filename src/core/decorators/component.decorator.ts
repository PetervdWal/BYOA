import metaDataRegistry from "../meta-data-registry.ts";

export function Component(config:{selector: string, templateUrl: string}){

    return function(_: any){

        metaDataRegistry.register(config.selector, config)
    }
}