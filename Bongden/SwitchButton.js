class SwitchButton {
    constructor() {
        this.status = false;
    }

    connectToLamp(ElectricLamp) {
        this.lamp = ElectricLamp;
        console.log("Da ket noi toi bong den");
        this.status = true;
    }

    switchOff() {
        this.lamp.turnOff();
    }

    switchOn() {
        this.lamp.turnOn();
    }
}