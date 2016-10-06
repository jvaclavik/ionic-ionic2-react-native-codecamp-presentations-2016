import {Page, NavController, NavParams} from 'ionic-angular';
import {WarholizePage} from '../warholize/warholize';
import Cropper from 'cropperjs';
const BASE64_PREFIX = "data:image/jpeg;base64,";

@Page({
    templateUrl: 'build/pages/cropper/cropper.html',
})
export class CropperPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }
    constructor(nav, navParams) {
        // TODO
    }
    getCroppedData() { // For export selected image 
        // TODO
    }
}
