import {Camera} from 'ionic-native';

Camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = "data:image/jpeg;base64," + imageData;
}, (err) => {
});