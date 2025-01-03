export function Component(config:{selector: string, templateUrl: string}){
    const templatePromise = fetch(config.templateUrl)
        .then((response) => response.text());
    return function(target: any){
        console.log('Running the component', target);
        target.selector = config.selector;
        const originalConstructor = target;

        const newConstructor: any = function(...args: any[]){
            // Call the original constructor
            const instance = new originalConstructor(...args);
            instance.templatePromise = templatePromise;
            return instance;
        }


        // Copy the prototype for inheritance
        newConstructor.prototype = originalConstructor.prototype;

        return newConstructor;
    }
}