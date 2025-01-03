export class TemplateCompiler{
    private templateCache = new Map<string, string>();

    async compile(templateUrl: string){
        const cachedTemplate = this.templateCache.get(templateUrl);
        if(cachedTemplate){
            return cachedTemplate;
        }

        const template = await fetch(templateUrl)
            .then((response) => response.text());

        this.templateCache.set(templateUrl, template);
        return template;
    }
}

const templateCompiler = new TemplateCompiler();
export default templateCompiler;