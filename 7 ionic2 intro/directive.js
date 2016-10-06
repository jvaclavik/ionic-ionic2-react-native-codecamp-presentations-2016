import {Directive} from 'angular2/core';
@Directive({
  selector: '[my-super-directive]' // Attribute selector
})
export class MySuperDirective {
  constructor() {
    console.log('Hello World');
  }
}
