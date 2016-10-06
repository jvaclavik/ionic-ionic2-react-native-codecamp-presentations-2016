import {Page, NavController, NavParams, Loading, ActionSheet} from 'ionic-angular';
import {SocialSharing} from 'ionic-native';
import {Warholizer} from './warholizer';
import {GalleryProvider} from '../../providers/gallery-provider/gallery-provider';
const BASE64_PREFIX = "data:image/jpeg;base64,";

@Page({
    templateUrl: 'build/pages/warholize/warholize.html',
    providers: [GalleryProvider]
})
export class WarholizePage {
    ...
}