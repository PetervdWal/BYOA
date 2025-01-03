type ComponentMetaData = {
    selector: string;
    templateUrl: string;
}
export class MetaDataRegistry {
    private registry =  new Map<string, ComponentMetaData>();

    public register(selector: string, metaData: ComponentMetaData){
        this.registry.set(selector, metaData);
    }

    getMetaData(selector: string){
        return this.registry.get(selector);
    }
}

const metaDataRegistry = new MetaDataRegistry();
export default metaDataRegistry;
