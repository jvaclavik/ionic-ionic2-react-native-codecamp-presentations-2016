getCroppedData() {
    var cropped = this.cropper.getCroppedCanvas({
        width: 500,
        height: 500
    });
    this.nav.push(WarholizePage, {
        imageData: cropped.toDataURL('image/jpeg')
    });
}