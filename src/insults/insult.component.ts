import {Component} from "../core/decorators/component.decorator.ts";

@Component({
    selector: 'insult-component',
    templateUrl: './insult.component.html',
})
export class InsultComponent {


    render(target: HTMLElement, template: string){
        if(target && template){
            console.log('The template', template);
            target.insertAdjacentHTML("beforeend",template)
        }
    }
}
