<template>
    <div class="main">
        <h1>{{ title }}</h1>
        <a href="#">
            <picture>
                <source srcset="../assets/mobile.png" media="(max-width: 500px)" />
                <source srcset="../assets/tablet_horizontal.jpg" media="(max-width: 768px)" />
                <source srcset="../assets/tablet_vertical.jpg" media="(max-width: 1024px)" />
                <img class="banner" src="../assets/desktop.png" alt="">
            </picture>
        </a>
        <!-- 倒數 -->
        <div class="addition">
            <div class="vote-box">
                <img class="box" src="../assets/投票箱.png" alt="box">
                <div class="timebox">
                    <p>&nbsp;&nbsp;&nbsp;倒數</p>
                    <i id="show"></i>
                    <p>天&nbsp;&nbsp;
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '九合一選舉',
        }
    },

    mounted() { 
 
        var timer = null;
        var show = document.getElementById("show");
        function show_date_time() {
            var target = new Date("2022/11/26");
            var today = new Date();
            var timeold = (target.getTime() - today.getTime());
            var msPerDay = 24 * 60 * 60 * 1000
            var e_daysold = timeold / msPerDay
            var daysold = Math.floor(e_daysold + 1);
            var e_hrsold = (e_daysold - daysold) * 24;
            var hrsold = Math.floor(e_hrsold);
            var e_minsold = (e_hrsold - hrsold) * 60;
            var minsold = Math.floor((e_hrsold - hrsold) * 60);
            var seconds = Math.floor((e_minsold - minsold) * 60);
            if (daysold < 0) {
                document.getElementById("time").innerHTML = "開票中";
                clearInterval(timer);
            }
            else {
                if (daysold < 10) { daysold = "0" + daysold }
                if (hrsold < 10) { hrsold = "0" + hrsold }
                if (minsold < 10) { minsold = "0" + minsold }
                if (seconds < 10) { seconds = "0" + seconds }
                // show.innerHTML = "倒數:" + daysold + "天" + hrsold + "小時" + minsold + "分" + seconds + "秒";
                // show.innerHTML = "倒數" + daysold + "天";
                show.innerHTML = daysold;

            }
        }
        timer = setInterval(show_date_time, 10);
    },
}
</script>

<style scoped>
/* 漢堡選單 */

#navbarBtn {
    display: none;
}


#navbarBtn {
    position: fixed;
    display: none;
    margin: 20px 10px;
    cursor: pointer;
    z-index: 100;
    background: #f5fff6;
    padding: 10px;
    border-radius: 10px;
    top: 4rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.fa-solid,
.fas {
    font-weight: 900;
    color: rgb(98, 96, 96);
}

#navbar1 {
    position: fixed;
    height: 100vh;
    z-index: 99;
    width: fit-content;
    margin: auto;
    display: flex;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.1rem;
    justify-content: center;
    background: #f5fff6;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}


#navbar1 a {
    color: black;
    color: rgb(90, 87, 87);
}



#navbarBtn {
    display: flex;
}

#navbar1 {
    display: none;
}

.bg-light {
    opacity: 0.94;
}

h1.layout {
    font-size: 2.6rem;
    display: flex;
}

p.layout {
    font-size: 1.8rem;
}

.row {
    margin-right: 0px;
    margin-left: 0px;
}

.guideText {
    margin: 10% 0;
}

.layout {
    max-width: 900px;
    margin: auto;
}

@media screen and (max-width: 768px) {
    .layout {
        margin: 5%;
    }
}

h1 {
    position: absolute;
    top: -100%;
}

.main {
    position: relative;
}

.main,
.main a,
.main img.banner {
    width: 100%;
}

img.banner {
    margin-top: 4rem;
}

/* 投票箱 */

.addition {
    background: white;
    position: absolute;
    bottom: 0;
    right: 15%;
    padding: .5rem 4rem 0.5rem 0.5rem;
    border-radius: 30px 30px 0 0;

}

.addition .vote-box {
    display: flex;
    align-items: center;
    position: relative;
}

.addition .vote-box img {
    width: 120px;
    height: 120px;
    position: absolute;
    right: -4.8rem;
    top: -4rem;
}

.addition .vote-box p {
    margin: 0;
    padding: 1rem;

}


.timebox {
    display: flex;
}

#show {
    font-size: 3rem;
}




@media screen and (max-width: 768px) {
    .addition {
        background: white;
        position: absolute;

        right: 15%;
        padding: .2rem 1rem 0.1rem 0.1rem;
        border-radius: 25px 25px 0 0px;
    }

    .addition .vote-box img {
        width: 100px;
        height: 110px;
        position: absolute;
        right: -4.5rem;
        top: -3rem;
    }

    .addition .vote-box p {
        margin: 0;
        padding: .5rem .5rem 1rem;
    }

    #show {
        font-size: 2.2rem;
    }

}



@media screen and (max-width: 500px) {
    .addition {
        background: white;
        position: absolute;
        bottom: 20px;
        right: 20%;
        padding: .1rem 1rem 0.1rem 0.1rem;
        border-radius: 25px 0 0 25px;
    }

    .addition .vote-box img {
        width: 100px;
        height: 110px;
        position: absolute;
        right: -4.5rem;
        top: -3rem;
    }

    .addition .vote-box p {
        margin: 0;
        padding: .5rem .5rem 1rem;
    }

    #show {
        font-size: 2.2rem;
    }



}
</style>
