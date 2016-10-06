savePhoto(photo) {
    if (!window.canvas2ImagePlugin) {
        console.warn('No canvas2Image plugin available, photo not saved.');
        return;
    }

    window.canvas2ImagePlugin.saveImageDataToLibrary(
        (fileName) => {
            this.gallery.push(fileName);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.gallery));
        },
        (err) => {
            console.error(err);
        },
        photo
    );
}