getPicture(source) {
    var options = {
        destinationType: 0, //base64
        quality: 50,
        targetWidth: 500
    };
    if(source === 'device'){
        options.sourceType = 0; //photo library	
    }
    Camera.getPicture(options).then((imageData) => {
        this.nav.push(WarholizePage, {imageData: imageData});
    }, (err) => {
        console.log('camera error');
        var demo = document.createElement("canvas");
        demo.width = 500;
        demo.height = 500;
        var img = new Image;
        img.src = "../../build/img/demo.jpg";
        img.onload = () => {
            demo.getContext("2d").drawImage(img, 0, 0, 500, 500);
            this.nav.push(WarholizePage, {imageData: demo.toDataURL("image/jpeg")});
        }
    });
}