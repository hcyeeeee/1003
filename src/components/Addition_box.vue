<template>
    <div class="addition">
        <img class="box" src="../assets/投票箱.png" alt="box">
        <p>倒數&nbsp;&nbsp;<i></i><i></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
    </div>

</template>

<script>
var nowTime = new Date();
console.log(Date());
console.log(nowTime.getTime());
console.log(nowTime.getDay());
console.log(nowTime.getMonth());
console.log(nowTime.getHours());
console.log(nowTime.getMinutes());
var aI = document.getElementsByTagName("i");
var hour = nowTime.getHours()
console.log('hour', hour);
setInterval(function () {  // 設置倒數計時: 結束時間 - 當前時間

    // 當前時間
    var time = new Date();
    var nowTime = time.getTime(); // 獲取當前毫秒數
    // 設置結束時間 : 5月13號 15點0分0秒
    time.setMonth(10); //   獲取當前 月份 (從 '0' 開始算)
    time.setDate(26); //   獲取當前 日
    time.setHours(0); //   獲取當前 時
    time.setMinutes(0); //   獲取當前 分
    time.setSeconds(0);
    var endTime = time.getTime();

    // 倒數計時: 差值
    var offsetTime = (endTime - nowTime) / 1000; // ** 以秒為單位
    var hr = parseInt(23 - hour); // 時
    var day = parseInt(offsetTime / 60 / 60 / 24); // 時

    aI[0].textContent = day + "天";
    aI[1].textContent = hr + "時";

}, 1000);
export default {
    methods: {
        function() {
            console.log(nowTime);
        },
    }
}
</script>
<style scoped>
.addition {
    position: relative;
    top: -140px;

}

@media screen and (max-width: 500px) {}

p {
    background-color: white;
    border-radius: 30px 30px 0px 0px;
    width: fit-content;
    height: fit-content;
    opacity: .9;
    padding: 1.4rem 3rem;
    color: black;
}

.box {
    position: relative;
    width: 100px;
    margin-bottom: -2.4rem;
    right: -170px;
    top: 20px;
    z-index: 1;
}
</style>
