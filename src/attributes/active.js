import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('active')
@inject(Element)
export class Active {
    constructor(element) {
        this.element = element;
    }

    valueChanged(newValue) {
        if (newValue) {
            this.element.classList.add('active');
        } else {
            this.element.classList.remove('active');            
        }
    }
}