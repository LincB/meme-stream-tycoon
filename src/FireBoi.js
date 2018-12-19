class FireBoi {
    turnedOn = false;
    name = "";
    image = "";
    states = {};
    text = "";
    tick = () => {};
    check = () => false;
    btns = [];

    constructor(app, name, states, image, tick, check) {
        this.app = app;
        this.name = name;
        this.states = states;
        this.image = image;
        this.tick = tick;
        this.check = check;
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
}


export default FireBoi;