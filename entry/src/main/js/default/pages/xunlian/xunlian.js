import router from '@system.router'

var timeValue = null;
var timeValueSeconds = null;

var speedValue = null;
var speedValueSeconds = null;

var timeTimer = null;
var speedTimer = null;
var percentTimer = null;

var counter = 0;

export default {
    data: {
        seconds: 0,
        isShow: true,
        breathe: "吸气",
        percent: "0",
        logoDuration: "",
        logoCount: "",
    },
    backHome() {
        console.log("to home");

        clearInterval(timeTimer);
        timeTimer = null;

        clearInterval(speedTimer);
        speedTimer = null;

        clearInterval(percentTimer);
        percentTimer = null;

        router.replace({
            uri: 'pages/index/index'
        });
    },
    timeCountDown(){
        this.seconds--;
        if(this.seconds==0){
            clearInterval(timeTimer);
            timeTimer = null;
            this.isShow = false;
        }
    },
    speedCheck(){
        counter++;
        if(counter == timeValueSeconds/speedValueSeconds ){
            clearInterval(speedTimer);
            speedTimer = null;
            this.breathe="已完成";
        }else{
            if(this.breathe == "吸气"){
                this.breathe = "呼气"
            }else if(this.breathe == "呼气"){
                this.breathe = "吸气"
            }
        }
    },
    percentChange(){
        this.percent = (parseInt(this.percent)+1).toString();
        if(parseInt(this.percent)<10){
            this.percent = "0"+this.percent;
        }
        if(parseInt(this.percent)==100){
            this.percent = "0";
        }
        if(speedTimer == null){
            clearInterval(percentTimer);
            percentTimer = null;
            this.percent = "100";
        }
    },
    onInit(){
        timeValue = this.timeValue;
        timeValueSeconds = timeValue*60;
        this.seconds = timeValueSeconds;

        speedValue = this.speedValue;
        if(speedValue == "较慢"){
            speedValueSeconds = 6;
        }else if(speedValue == "舒缓"){
            speedValueSeconds = 4;
        }else if(speedValue == "较快"){
            speedValueSeconds = 2;
        }

        this.logoDuration = speedValueSeconds+"s";
        this.logoCount = (timeValueSeconds/speedValueSeconds).toString();
    },
    onReady(){
        console.log("xunlian onReady start");
    },
    onShow(){
        timeTimer = setInterval(this.timeCountDown,1000);
        speedTimer = setInterval(this.speedCheck,speedValueSeconds*1000);
        percentTimer = setInterval(this.percentChange,speedValueSeconds*10);
    },
    onDestroy(){
        console.log("xunlian onDestroy start");
    },
}
