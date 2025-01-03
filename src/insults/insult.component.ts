export class InsultComponent {
    private readonly template = '<h3>Your face looks like a NS train</h3>';
    render(target: HTMLElement){

        target.innerHTML = this.template
    }
}
