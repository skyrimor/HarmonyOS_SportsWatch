import router from '@system.router'

var timeValue = null;
var speedValue = null;

export default {
    data: {
        timeRange: ["1", "2", "3"],
        speedRange: ["较慢", "舒缓", "较快"],
    },
    toXunlian() {
        console.log("to xunlian");
        router.replace({
            uri: "pages/daojishi/daojishi",
            params: {
                "timeValue": timeValue,
                "speedValue": speedValue
            }
        });
    },
    timeRangeChange(filed) {
        console.log("timeRangeChange value :" + filed.newValue);
        timeValue = filed.newValue;
    },
    speedRangeChange(filed) {
        console.log("speedRangeChange value :" + filed.newValue);
        speedValue = filed.newValue;
    },
    onInit() {
        console.log("index onInit start");
    },
    onReady() {
        console.log("index onReady start");
    },
    onShow() {
        console.log("index onShow start");
    },
    onDestroy() {
        console.log("index onDestroy start");
    },
}
