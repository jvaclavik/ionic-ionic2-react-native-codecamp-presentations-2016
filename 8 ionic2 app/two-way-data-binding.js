import {Pager} from 'ionic-angular';
@Page({
    templateUrl: 'build/pages/my-details/my-details.html',
})
export class MyDetailsPage {
    constructor() {
        
    } 
    saveForm(event) {
        console.log(this.myValue);
    }
}