import router from '@system.router'

var timeValue = null;
var speedValue = null;

var timeTimer = null;

export default {
    data: {
        daojishi: 3,
    },
    timeCountDown(){
        this.daojishi--;
        if(this.daojishi < 1){
            clearInterval(timeTimer);
            timeTimer = null;
            router.replace({
                uri: "pages/xunlian/xunlian",
                params: {
                    "timeValue": timeValue,
                    "speedValue": speedValue
                }
            });
        }
    },
    onInit() {
        console.log("daojishi onInit start");
        timeValue = this.timeValue;
        speedValue = this.speedValue;
    },
    onReady() {
        console.log("daojishi onReady start");
    },
    onShow() {
        console.log("daojishi onShow start");
        timeTimer = setInterval(this.timeCountDown,1000);
    },
    onDestroy() {
        console.log("daojishi onDestroy start");
    },
}
