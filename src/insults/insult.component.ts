export class InsultComponent {
    private template: string = '<h3>Your face looks like a NS train</h3>'

    render(target: HTMLElement){
        if(this.template){
            target.innerHTML = this.template
        }
    }
}
