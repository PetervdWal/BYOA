import {ComponentConstructor} from "./types/ComponentAPI.ts";

type ComponentMetaData = {
    selector: string;
    templateUrl: string;
    absoluteUrl: string;
    componentClass: ComponentConstructor
}
export class MetaDataRegistry {
    private registry =  new Map<string, ComponentMetaData>();

    public register(selector: string, metaData: ComponentMetaData){
        console.log('registering', selector);
        this.registry.set(selector, metaData);
        console.log('registered', this.registry);
    }



    getMetaData(selector: string){
        return this.registry.get(selector);
    }

    getComponentByRelativeUrl(url: string){
        for(const metaData of this.registry.values()){
            if(metaData.templateUrl === url){
                return metaData.absoluteUrl
            }
        }
        throw new Error(`Unable to find ${url}`);
    }
}

const metaDataRegistry = new MetaDataRegistry();
export default metaDataRegistry;
