class FireBoi {
    turnedOn = false;
    name = "";
    image = "http://www.stickpng.com/assets/images/58a1e021e33a543010fac278.png";
    states = {};
    text = "";
    btns = [];

    constructor(app) {
        this.app = app;
    }

    init() {
        this.text = this.states['start'].text;
        this.btns = this.states['start'].btns;
    }

    loadState(stateName) {
        let state = this.states[stateName];
        this.text = state.text;
        this.btns = state.btns;
        this.app.setState({currentFire: this});
    }

    check() {
        return false;
    }

    tick() {
        return false;
    }

    activate() {}
}


export default FireBoi;