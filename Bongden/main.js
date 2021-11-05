var electricLamp = new ElectricLamp();
var switchButton = new SwitchButton();
const timer = ms => new Promise(res => setTimeout(res, ms));
const connectToLamp = () => {
    switchButton.connectToLamp(electricLamp);
    connecttoLamp.innerHTML = "Đã kết nối";
    connecttoLamp.style.backgroundColor = "blue";
}
const tatBat10Lan = async() => {
    if (!switchButton.status) {
        alert('Bạn chưa kết nối công tắc với bóng đèn');
        return;
    }
    let i = count.value;

    while (i > 0) {
        await timer(1000);
        switchButton.switchOn();
        await timer(1000);
        switchButton.switchOff();
        i--;
    }
}