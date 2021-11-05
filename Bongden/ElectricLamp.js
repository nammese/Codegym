class ElectricLamp {
    constructor() {
        this.status = false;
    }

    turnOff() {
        this.status = false;
        console.log(`Bong den da tat`);
        status.innerHTML = "Đã tắt"
        status.style.backgroundColor = "black";
    }

    turnOn() {
        this.status = true;
        console.log(`Bong den da bat`);
        status.innerHTML = "Đã bật";
        status.style.backgroundColor = "red";
    }
}