snapPhoto(event){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 640, 480);
    this.nav.push(CropperPage, {imageData: canvas.toDataURL("image/jpeg")});
}