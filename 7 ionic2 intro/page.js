import {Page, NavController} from 'ionic-angular';
@Page({
  templateUrl: 'build/pages/my-page/my-page.html',
})
export class MyPagePage {
  static get parameters() {
    return [[NavController]];
  }
  constructor(nav) {
    this.nav = nav;
  }
}
