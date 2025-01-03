export function Component(config:{selector: string, templateUrl: string}){
    const templatePromise = fetch(config.templateUrl)
        .then((response) => response.text());
    return function(target: any){
        console.log('Running the component', target);
        target.selector = config.selector;
        const originalConstructor = target;

        //Attach the templatePromise to the instance instead of the shared prototype.
        //This makes it so that each instance of the class gets its own property.
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