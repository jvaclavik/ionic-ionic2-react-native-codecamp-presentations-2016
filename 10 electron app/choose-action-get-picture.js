getPicture(source) {
    ...
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