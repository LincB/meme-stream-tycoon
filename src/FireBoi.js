class FireBoi {
    turnedOn = false;
    name = "";
    image = "";
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

    tick() {}

    activate() {}
}


export default FireBoi;