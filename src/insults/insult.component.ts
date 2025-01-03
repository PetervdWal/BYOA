import {Component} from "../core/decorators/component.decorator.ts";

@Component({
    selector: 'insult-component',
    templateUrl: './insult.component.html',
})
export class InsultComponent {
    templatePromise!: Promise<string>;

    async render(target: HTMLElement){
        if(target){
            console.log(this.templatePromise);
            const template = await this.templatePromise;

            console.log('The template', template);
            target.insertAdjacentHTML("beforeend",template)
        }
    }
}
