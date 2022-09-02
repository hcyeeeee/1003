<template>
    <div class="">

        <div class="marquee">
            <marquee>
                我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈我是跑馬燈</marquee>
        </div>
        <!-- 倒數 -->
        <div class="time">
            <p>距離選舉日</p>

        </div>
    </div>



</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: '首頁',
                    anchor: '#voting',
                },
                {
                    title: '選將名單',
                    anchor: '#profile',
                },
                {
                    title: '歷年版圖',
                    anchor: '#porcess',
                },
                {
                    title: '修憲公投',
                    anchor: '#news',
                }, {
                    title: '新聞專區',
                    anchor: '#news',
                },
            ],
        }
    },
    methods: {
        scroll() {
            window.addEventListener('scroll', () => {
                this.moveBar('#374674')
            })
        },

        moveBar(color = '#0984e3') {
            let bar = document.querySelector('.progress')
            let w = Math.ceil(
                (Math.round(window.pageYOffset) / (document.body.scrollHeight - window.innerHeight)) * 100
            )
            bar.style.width = w + '%'
            bar.style.background = color
        },

        time() {
            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            //I'm adding this section so I don't have to keep updating this pen every year :-)
            //remove this if you don't need it
            let today = new Date(),
                dd = String(today.getDate()).padStart(2, "0"),
                mm = String(today.getMonth() + 1).padStart(2, "0"),
                yyyy = today.getFullYear(),
                nextYear = yyyy + 1,
                dayMonth = "11/26/",
                birthday = dayMonth + yyyy;

            today = mm + "/" + dd + "/" + yyyy;
            if (today > birthday) {
                birthday = dayMonth + nextYear;
            }
            //end

            const countDown = new Date(birthday).getTime(),
                x = setInterval(function () {

                    const now = new Date().getTime(),
                        distance = countDown - now;

                    document.getElementById("days").innerText = Math.floor(distance / (day)),
                        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {
                        document.getElementById("headline").innerText = "It's my birthday!";
                        document.getElementById("countdown").style.display = "none";
                        document.getElementById("content").style.display = "block";
                        clearInterval(x);
                    }
                    //seconds
                }, 0)
                ;
        },
        mounted() {
            this.scroll()
            this.moveBar()
        },
    }
}
</script>

<style scoped>
/* 漢堡選單 */
.nav {
    width: 250px;
    padding: 1rem;
    position: fixed;
    background-color: rgba(255, 255, 255);
    z-index: 998;
    top: 3.3rem;
    right: 1rem;
    border-radius: 10px;
    display: none;
    box-shadow: 1px 2px 3px black;
}

.fa-list {
    color: #003881;
    cursor: pointer;
    position: fixed;
    z-index: 999;
    top: 1rem;
    right: 1rem;
    background-color: white;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 1px 2px 3px black;
}

.fa-list:hover .nav {
    display: block;
}


.nav a:hover::before {
    content: '\f061';
    padding-right: 1rem;
}


.logo {
    max-width: 100%;
    width: 300px;
}

@media screen and (max-width: 768px) {
    .logo {
        width: 200px;
    }
}

@media screen and (max-width: 450px) {
    .logo {
        width: 200px;
    }
}

/* 進度條 */
.progress {
    position: fixed;
    top: 1px;
    width: 0.5%;
    height: 10px;
    z-index: 999;
}

a {
    font-size: 1rem;
    margin: 1rem;
    display: block;
    color: #003881;
    font-weight: bolder;
    transition: 0.3s;
    border-bottom: 1px solid #d6e3ed;
    padding-bottom: 10px;
}

.header {
    display: grid;

    grid-template-columns: 3fr 3fr;
}

.navbar {}
</style>

