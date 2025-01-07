import {Component} from "../core/decorators/component.decorator.ts";

@Component({
    selector: 'compliment-component',
    templateUrl: './compliment.component.html',
})
export class ComplimentComponent {


    render(target: HTMLElement, template: string){
        if(target && template){
            console.log('The template', template);
            target.insertAdjacentHTML("beforeend",template)
        }
    }
}
