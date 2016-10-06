...
import {Utility} from './utility';

@App({
    templateUrl: 'build/app.html',
    config: {}
})
class MyApp {
    static get parameters() {
        return [[IonicApp], [Platform], [MenuController]];
    }
    constructor(app, platform, menu) {
        this.menu = menu;
        ...
    }
    initializeApp() {
        this.platform.ready().then(() => {
            ...
            if (Utility.isElectron()) {
                this.menu.swipeEnable(false);
            }
        });
    }
    ...
}
