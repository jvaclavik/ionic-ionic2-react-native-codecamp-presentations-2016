import {Injectable, Pipe} from 'angular2/core';
@Pipe({
  name: 'my-old-pipes'
})
@Injectable()
export class MyOldPipes {
  transform(value, args) {
    value = value + ''; // make sure it's a string
    return value.toLowerCase();
  }
}
