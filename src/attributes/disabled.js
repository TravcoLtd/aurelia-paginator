import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('disabled')
@inject(Element)
export class Disabled {
    constructor(element) {
        this.element = element;
    }

    valueChanged(newValue) {
        if (newValue) {
            this.element.classList.add('disabled');
        } else {
            this.element.classList.remove('disabled');            
        }
    }
}