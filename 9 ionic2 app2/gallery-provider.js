import {Injectable} from 'angular2/core';
const STORAGE_KEY = 'gallery';

@Injectable()
export class GalleryProvider {
    constructor() {
        this.gallery = [];
        var galleryImages = localStorage.getItem(STORAGE_KEY);
        if (galleryImages) {
            try {
                this.gallery = JSON.parse(galleryImages) || [];
            } catch (e) {
                console.warn('Error getting gallery filenames');
            }
        }
    }

    savePhoto(photo) {
        // TODO
    }

    getGallery() {
        return this.gallery;
    }
}

