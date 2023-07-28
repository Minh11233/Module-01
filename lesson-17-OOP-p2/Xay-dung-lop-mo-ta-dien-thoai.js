let Mobile = function (battery, composeMemory, inboxMemory, sentMemory, status) {
    this.battery = battery;
    this.composeMemory = composeMemory;
    this.inboxMemory = inboxMemory;
    this.sentMemory = sentMemory;
    this.status = status;
    this.isOn = function () {
        return this.status
    }
    this.turnOn = function () {
        if(!this.isOn()) {
            if (this.battery > 0 && this.battery < 100) {
                this.useMobileFunc();
                this.status = true;
            }
        }
    }
    this.turnOff = function () {
        if (this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.useMobileFunc();
                this.status = false;
            }
        }
    }
    this.chargeBattery = function () {
        if (this.battery < 100)
            this.battery++;
    }
    this.composeMessage = function (message) {
        if (this.isOn()) {
            this.useMobileFunc();
            this.composeMemory = message;
        }
    }
    this.sendMessage = function(toMobile) {
        if(this.isOn()) {
            this.useMobileFunc();
            this.sentMemory = this.composeMemory;
            toMobile.inboxMemory = this.sentMemory;
        }
    }
    this.receiveMessage = function() {
        if (this.isOn()) {
            this.useMobileFunc();
            return "You have a new message!";
        }
    }
    this.readMessage = function () {
        if (this.isOn()) {
            this.useMobileFunc();
            return this.inboxMemory;
        }
    }
    this.useMobileFunc = function () {
        this.battery--;
    }
}
let nokia = new Mobile(90,"","","",true);
let iPhone = new Mobile(80,"","","",true);

document.getElementById("iPhoneBattery").innerHTML = `Battery remain: ${iPhone.battery}%`
document.getElementById("nokiaBattery").innerHTML = `Battery remain: ${nokia.battery}%`
//iPhone section
function chargeIphone(){
    iPhone.chargeBattery();
}
function sendFromIphone(){
    let composingMessage2 = prompt("Enter your message: ");
    iPhone.composeMessage(composingMessage2);
    iPhone.sendMessage(nokia);
}
function receivedIphone(){
    let isCheck = iPhone.receiveMessage();
    if (isCheck != "") {
    alert("Message is:" + iPhone.readMessage())
}}
function sentIphone(){}
function turnOnIphone(){iPhone.turnOn()}
function turnOffIphone(){
    iPhone.turnOff()
}
//nokia section
function chargeNokia(){

}
function sendFromNokia(){
    let composingMessage1 = prompt("Enter your message: ");
    nokia.composeMessage(composingMessage1);
    nokia.sendMessage(iPhone);
}
function receivedNokia(){
    let isCheck = nokia.receiveMessage();
    if (isCheck != "") {
        alert("Message is:" + nokia.readMessage())
}}
function sentNokia(){

}
function turnOnNokia(){

}
function turnOffNokia(){}