...
import {Utility} from '../../utility';

@Page({
    templateUrl: 'build/pages/warholize/warholize.html',
    providers: [GalleryProvider]
})
export class WarholizePage {
    ...
	isElectron(){
		return Utility.isElectron();
	}

}
