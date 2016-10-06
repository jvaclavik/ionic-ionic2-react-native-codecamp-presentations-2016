import {Page, NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {WarholizePage} from '../warholize/warholize';

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
	/**
	 * @description Starts the device's camera
	 * @param {String} String specifying image source (device storage / camera) 
	 */
	getPicture(source) {
		// TODO
	}
}