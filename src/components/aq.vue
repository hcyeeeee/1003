<template>

    <div class="section" id="qa">
        <h2>修憲公投Ｑ＆Ａ</h2>
        <!-- 18歲公民權是什麼？ -->
        <div class="map">
            <div class="orange">
                <h3><i class="fa-sharp fa-solid fa-circle-question"></i> &nbsp;18歲公民權是什麼？</h3>

            </div>
            <p>立法院會今年3月通過18歲公民權修憲案，將於年底11/26九合一大選同天舉行公民複決。<br><br>
                這是台灣相隔17年再度有修憲案，也是憲政史上首次修憲案公民複決程序。若修憲案通過，18歲以上公民可有選舉、罷免、創制、複決及參加公民投票的權利，也有被選舉權。 </p>
        </div>
        <!-- 誰可以參與此次投票？ -->
        <div class="map">
            <div class="orange">
                <h3><i class="fa-sharp fa-solid fa-circle-question"></i> &nbsp;誰可以參與此次投票？</h3>
            </div>
            <p>本次公民複決投票權為年滿20歲的國民，且在台灣住6個月以上的公民。</p>
        </div>
        <!-- 通過門檻是多少票？ -->
        <div class="map">
            <div class="orange">
                <h3><i class="fa-sharp fa-solid fa-circle-question"></i> &nbsp;通過門檻是多少票？</h3>
            </div>
            <p>18歲公民權修憲案若有效同意票超過選舉人半數，則通過修憲，並由總統令公告。<br>中選會公告，本次預估選舉人數將近1,930萬人，意即修憲案須965萬人投下同意票才會通過。</p>
        </div>
        <!-- 公投有哪些重要時程？ -->
        <div class="map">
            <div class="orange">
                <h3><i class="fa-sharp fa-solid fa-circle-question"></i> &nbsp;公投有哪些重要時程？</h3>
            </div>

            <ul>
                <li>
                    <i class="fa-solid fa-circle"></i>&nbsp; 意見發表會時程
                </li>
                <div class="time">
                    11/12 意見發表會（一）
                </div>
                <div class="time">
                    11/15 意見發表會（二）
                </div>
                <div class="time">
                    11/17 意見發表會（三）
                </div>
                <div class="time">
                    11/19 意見發表會（四）
                </div>
                <div class="time">
                    11/22 意見發表會（五）
                </div>

                <li> <i class="fa-solid fa-circle"></i>&nbsp; 11/26 投票、開票</li>
                <li> <i class="fa-solid fa-circle"></i>&nbsp; 12/02 前審定公民投票結果</li>
            </ul>
            <br>
        </div>
    </div>

</template>

<script>

import Splide from '@splidejs/splide';
Splide.defaults = {
    type: 'loop',
    autoHeight: 'true'
}
export default {


    mounted() {
        document.addEventListener('DOMContentLoaded', function () {
            var splide = new Splide('#splide1');
            splide.mount();
        });
        document.addEventListener('DOMContentLoaded', function () {
            var splide2 = new Splide('#splide2');
            splide2.mount();
        });
        document.addEventListener('DOMContentLoaded', function () {
            var splide3 = new Splide('#splide3');
            splide3.mount();
        });
    },
}

</script>


<style scoped>
.splide__slide {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
}

li img {

    width: 100%;
    padding: 1rem;
}


.map {
    background-color: rgb(255, 255, 255);
    margin: 2rem .5rem 3rem .5rem;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}

.orange {
    border-radius: 20px 20px 0px 0px;
    background: orange;

}

h3 {
    text-shadow: rgb(0 0 0 / 50%) 0px 2px 2px;
    color: white;
    margin: 1rem auto 0rem;
    padding: 1.2rem;
    font-size: 1.3rem;
    line-height: 2rem;
}

p {
    padding: 1rem 2rem;
    line-height: 2rem;
    font-size: 1.1rem;
}

.splide__slide p {
    padding: 0rem 1.5rem;
    line-height: 2rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
}


/* li::before {

    content: "  ";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #FFA255;
    display: inline-block;
    margin: -0.2rem 0.5rem;

} */

li {
    padding: .5rem 1.5rem;
}

.time {
    border: 2px solid rgb(250, 192, 83);
    background: #e1f5e4;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: inline-flex;
    width: 100px;
    margin: 1rem 1.5rem;
    padding: 1rem;
    border-radius: 10px;
}

p.desktop {
    display: block;
}

p.mobile {
    display: none;
}


@media screen and (max-width: 768px) {

    .splide__slide {
        display: block;
        max-height: 700px;


    }

    p.desktop {
        display: none;
    }

    p.mobile {
        display: block;
    }

    .splide__slide p {
        padding: 0rem .5rem;

    }

}



@media screen and (max-width: 500px) {
    h3 {
        text-shadow: rgba(48, 48, 48, 0.5) 0px 2px 2px;
        color: white;
        margin: 1rem auto;
        padding: .2rem;
        font-size: 1.2rem;
        line-height: 4rem;
    }

    .time {
        border: 2px solid rgb(250, 192, 83);
        background: #e1f5e4;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        display: inline-flex;
        width: 100px;
        margin: .5rem .4rem;
        padding: 1rem;
        border-radius: 10px;
    }

    .splide__slide {
        display: block;

    }



}

.section {
    max-width: 1000px;
    padding: 0rem 1rem;
}
</style>
