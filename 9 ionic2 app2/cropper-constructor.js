constructor(nav, navParams) {
    this.nav = nav;
    this.navParams = navParams;
    var imageData = navParams.get('imageData');

    if (~imageData.indexOf(BASE64_PREFIX))
        this.imageData = imageData;
    else
        this.imageData = BASE64_PREFIX + imageData;
    setTimeout(() => {
        this.cropper = new Cropper(
                document.getElementById('cropper-img'), 
            {
                aspectRatio: 1,
                viewMode: 2,
            }
        );
    });
}
