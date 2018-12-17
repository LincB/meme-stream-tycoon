class FireBoi {
    turnedOn = true;
    name = "";
    image = "";
    text = "";
    tick = () => {};
    check = () => {};
    btns = [];
    constructor(app, name, image, text, tick, check, btns) {
        this.app = app;
        this.name = name;
        this.image = image;
        this.text = text;
        this.tick = tick;
        this.check = check;
        this.btns = btns;
    }
}


export default FireBoi;