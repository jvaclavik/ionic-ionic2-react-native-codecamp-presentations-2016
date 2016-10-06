import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/movie-detail/movie-detail.html',
})
export class MovieDetailPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, params) {
        this.nav = nav;
        this.params = params;
        console.log("ID: " + this.params.get("id"));
    }

    goBack() {
        this.nav.pop();
    }
}
