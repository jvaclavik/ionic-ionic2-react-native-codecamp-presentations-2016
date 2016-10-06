import {Page} from 'ionic-angular';
import {MoviesProvider} from '../../providers/movies-provider/movies-provider';

@Page({
    templateUrl: 'build/pages/movies/movies.html',
    providers: [MoviesProvider],
})
export class MoviesPage {
    static get parameters() {
        return [[MoviesProvider]];
    }

    constructor(moviesProvider) {
        this.movies = [];
        var p = mp.load();
        p.then((data) => {
            this.movies = data.results;
        });
    }
}