...
import {CropperPage} from '../cropper/cropper';
...
export class ChooseActionPage {
	...
	getPicture(source) {
		...
		Camera.getPicture(options).then((imageData) => {
			this.nav.push(CropperPage, {imageData: imageData});
		}, (err) => {
		    ...
			img.onload = () => {
				...
				this.nav.push(CropperPage, {
                    imageData: demo.toDataURL("image/jpeg")
                });
			}
		});
	}
}