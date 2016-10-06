import {Page, NavController} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/movie-detail/movie-detail.html',
})
export class MovieDetailPage {
    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
    }

    goBack() {
        this.nav.pop()
    }
}
