<template>
    <div class="addition">
        <img class="box" src="../assets/投票箱.png" alt="box">
        <p> 倒數<i></i>&nbsp;天&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

    </div>

</template>

<!-- <script >
var nowTime = new Date();
console.log(Date());
console.log(nowTime.getTime());
console.log(nowTime.getDay());
console.log(nowTime.getMonth());
console.log(nowTime.getHours());
console.log(nowTime.getMinutes());
let aI = document.getElementsByTagName("i");
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
    // var hr = parseInt(23 - hour); // 時
    var day = parseInt(offsetTime / 60 / 60 / 24); // 時
    aI[0].textContent = day;
    // aI[1].textContent = hr + "時";

}, 1);
export default {
    methods: {
        function() {
            console.log(nowTime);
        },
    }
}
</script> -->
<style scoped>
.addition {
    display: flex;
    justify-content: end;
    position: relative;
    top: -77px;
    margin: 0rem 2rem -6rem;
}

@media screen and (max-width: 500px) {}

p {
    background-color: white;
    border-radius: 25px 25px 0px 0px;
    width: fit-content;
    height: fit-content;
    opacity: .9;
    padding: 1.5rem 3rem;
    color: #323232;
    display: flex;
    justify-content: end;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.box {
    position: relative;
    width: 120px;
    height: 120px;
    margin-bottom: -2.4rem;
    top: 20px;
    top: -55px;
    right: -275px;
    z-index: 1;
}

i {
    font-size: 40px;
    padding: 0 .2rem;

}

@media screen and (max-width: 768px) {
    p {
        background-color: white;
        border-radius: 25px 25px 0px 0px;
        width: fit-content;
        height: fit-content;
        opacity: .9;
        padding: 1rem 2.2rem;
        color: #323232;
        display: flex;
        justify-content: end;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin-top: 1.25rem;
    }

    .box {
        position: relative;
        width: 100px;
        height: 100px;
        top: -30px;
        right: -205px;
        z-index: 1;
    }

    i {
        font-size: 26px;
        padding: 0 .1rem .2rem;

    }
}




@media screen and (max-width: 500px) {
    .fa-angle-up {
        display: none;
    }

    p {
        background-color: white;
        padding: 1rem 1.4rem;
        color: #323232;
        display: absolute;
        font-weight: 500;
        font-size: 20px;
        margin-top: -0.2rem;
        margin-right: 2rem;
        border-radius: 25px 25px;

    }



    .addition {

        justify-content: end;
        position: relative;

    }

    .box {
        position: absolute;
        width: 110px;
        height: 120px;
        top: 0px;
        display: flex;
        justify-content: center;
        z-index: 1;
        top: -3rem;
        right: -.7rem;
        padding: 0.2rem;
        margin-right: 1rem;
    }


}
</style>
