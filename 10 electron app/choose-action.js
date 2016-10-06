import {Page, NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {CropperPage} from '../cropper/cropper';
import {Utility} from '../../utility';

const BASE_DIMENSION = 500;

@Page({
	templateUrl: 'build/pages/choose-action/choose-action.html',
})
export class ChooseActionPage {
	static get parameters() {
		return [[NavController]];
	}
	constructor(nav) {
		this.nav = nav;
	}
	
	isElectron(){
		return Utility.isElectron();
	}
	
	snapPhoto(event){
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		context.drawImage(video, 0, 0, 640, 480);
		this.nav.push(CropperPage, {imageData: canvas.toDataURL("image/jpeg")});
	}

	getPicture(source) {
		var options = {
			destinationType: 0, //base64
			quality: 60,
			targetWidth: BASE_DIMENSION
		};
		if(source === 'device'){
			options.sourceType = 0; //photo library	
		}
		Camera.getPicture(options).then((imageData) => {
			this.nav.push(CropperPage, {imageData: imageData});
		}, (err) => {
			if(source !== 'device'){
				var video = document.getElementById("video");
				var videoObj = { "video": true };
				var videoErrorHandler = function(error) {
					console.error("Failed to capture video: ", error.code);
				};
				if(navigator.getUserMedia) { // Standard
					navigator.getUserMedia(videoObj, function(stream) {
						video.src = stream;
						video.play();
					}, videoErrorHandler);
				} else 
				if(navigator.webkitGetUserMedia) { // WebKit-prefixed
					navigator.webkitGetUserMedia(videoObj, function(stream){
						video.src = window.webkitURL.createObjectURL(stream);
						video.play();
					}, videoErrorHandler);
				}
			} else{
				...
			}
		});
	}
}