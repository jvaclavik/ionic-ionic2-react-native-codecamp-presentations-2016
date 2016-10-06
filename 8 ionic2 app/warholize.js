import {Page, NavController, NavParams} from 'ionic-angular';
import {Warholizer} from './warholizer';
const BASE64_PREFIX = "data:image/jpeg;base64,";

@Page({templateUrl: 'build/pages/warholize/warholize.html' })
export class WarholizePage {
	static get parameters(){ return [[NavController], [NavParams]];	}
	
    constructor(nav, navParams){
		this.generated = false;
		var imageData = navParams.get('imageData');
		if(imageData){
			this.useNewImageAsSrc(imageData);	
		}
    }
	applyEffect(){
		// TODO
	}
	useNewImageAsSrc(imageData){
		if(~imageData.indexOf(BASE64_PREFIX))
			this.imgSrc = imageData;
		else
			this.imgSrc = BASE64_PREFIX + imageData;
	}
}
