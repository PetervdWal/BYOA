export function Component(config:{selector: string, templateUrl: string}){
    return function(target: any){
        console.log('Running the component', target);
        target.selector = config.selector;

        const loadTemplate = async() => {
            console.log('Fetching the code from url', config.templateUrl);
            const response = await fetch(config.templateUrl);
            target.prototype.template = await response.text();
            console.log('The response is', target.prototype.template);
        }

        loadTemplate();
    }
}