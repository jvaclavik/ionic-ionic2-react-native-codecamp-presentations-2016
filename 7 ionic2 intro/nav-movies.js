import {Page, NavController} from 'ionic-angular';
import {MovieDetailPage} from '../movie-detail/movie-detail'

@Page({
    templateUrl: 'build/pages/movies/movies.html',
})
export class MoviesPage {
    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
    }
  
    showDetail() {
        this.nav.push(MovieDetailPage)
    }
}
