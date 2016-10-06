import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';
@Component({
    selector: 'my-component',
    templateUrl: 'build/components/my-component/my-component.html',
    directives: [IONIC_DIRECTIVES]
})
export class MyComponent {
    constructor() {
        this.text = 'Hello World';
    } 
} 
