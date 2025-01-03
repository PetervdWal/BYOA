import {Component} from "../core/decorators/component.decorator.ts";

@Component({
    selector: 'insult-component',
    templateUrl: './insult.component.html',
})
export class InsultComponent {
    // Placeholder for the loaded template
    template: string = '';
    render(target: HTMLElement){
        if(this.template){
            console.log('got data')
            target.insertAdjacentHTML("beforeend", this.template)
        }
    }
}
