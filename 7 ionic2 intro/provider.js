import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MyProvider {
  static get parameters(){
    return [[Http]]
  }  
  constructor(http) {
    this.http = http;
    this.data = null;
  }
  load() {
    if (this.data) return Promise.resolve(this.data);
    return new Promise(resolve => {
      this.http.get('path/to/data.json')
        .map(res => res.json()).subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

