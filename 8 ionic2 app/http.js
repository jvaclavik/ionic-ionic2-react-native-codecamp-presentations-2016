import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesProvider {
  static get parameters(){
    return [[Http]]
  }
  constructor(http) {
    this.http = http;
    this.data = null;
  }
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=4aa883f95999ec813b8bfaf319f3972b')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

