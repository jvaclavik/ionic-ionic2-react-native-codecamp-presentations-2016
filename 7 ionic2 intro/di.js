import {Page, NavController, Platform} from 'ionic-angular';
@Page({
    templateUrl: 'build/pages/movies/movies.html'
})
export class MoviesPage {
    static get parameters() {
        return [[NavController], [Platform]];
    }
    constructor(nav, platform) {
        this.nav = nav;
        this.platform = platform;
    } 
} 