...
static get parameters() {
    return [[NavController], [NavParams], [GalleryProvider]];
}

constructor(nav, navParams, gallery) {
    this.nav = nav;
    this.generated = false;
    this.gallery = gallery;
    this.imgSrc = 'img/demo.jpg'; //default image
    var imageData = navParams.get('imageData');
    if (imageData) {
        this.useNewImageAsSrc(imageData);
    }
}
...