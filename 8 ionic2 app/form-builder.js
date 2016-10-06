import {Pager} from 'ionic-angular';
import {FormBuilder, Validators} from 'angular2/common';
@Page({
    templateUrl: 'build/pages/my-details/my-details.html',
})
export class MyDetailsPage {
    static get parameters() {
        return [[FormBuilder]];
    }
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.myForm = formBuilder.group({
            name: ['', Validators.required],
            houseNumber: ['', Validators.maxLength(10)]
        });
    } 
    saveForm(event) {
        console.log(this.myForm);
    } 
}