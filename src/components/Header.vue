<template>
    <div>
        <div class="header">
            <div class="flex-logo logo">

                <a href="https://www.ftvnews.com.tw/" target="blank"> <img src="../assets/logo.png" alt="民視新聞網"></a>
            </div>

            <nav class="computer navbar">
                <a v-for="(item, index) of list" :key="index" :href="item.anchor">
                    {{ item.title }}
                </a>
            </nav>
            <div class="fad fa-2x fa-bars mobile" @click="menu">
                <nav class=" nav ">
                    <a v-for="(item, index) of list" :key="index" :href="item.anchor">
                        {{ item.title }}
                        <hr>
                    </a>
                </nav>
            </div>
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
                    anchor: '#',
                },
                {
                    title: '候選人簡介',
                    anchor: '#profile',
                },
                {
                    title: '最新新聞',
                    anchor: '#news',
                },
                {
                    title: '地方選戰',
                    anchor: '#district',
                },
                {
                    title: '影音專區',
                    anchor: '#video',
                },
                {
                    title: '直播新聞',
                    anchor: '#live',
                },

            ],
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {

        menu() { },
        handleScroll() {
            this.active = window.scrollY < 700 ? true : false
        },
    },
    mounted() {
        this.scroll()
        this.moveBar()
    },
}
</script>

<style scoped>
.fixed {
    display: none;
}

/* 漢堡選單 */

.nav {

    width: 220px;
    padding: 1rem;
    position: fixed;
    background-color: #F3FFF5;
    z-index: 998;
    top: 3.3rem;
    right: 1rem;
    border-radius: 10px;
    display: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.fa-bars {
    color: #78a17f;
    cursor: pointer;
    position: absolute;
    z-index: 999;
    top: 1rem;
    right: 1rem;
    border-radius: 10px;
    padding: 5px;

}

.fa-bars:hover .nav {
    display: block;
}


.nav a:hover::before {
    content: '\f061';
    padding-right: 1rem;
}


.logo {
    max-width: 100%;
    width: 250px;
}

.logo img {
    width: 180px;
}

@media screen and (max-width: 768px) {
    .logo {
        width: 200px;
    }

    .logo img {
        width: 180px;
    }
}

@media screen and (max-width: 450px) {
    .logo {
        width: 200px;
    }

    .logo img {
        width: 160px;
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
    font-size: 1.2rem;
    margin: 0rem 1rem;
    display: block;
    color: #595757;
    font-weight: bolder;
    transition: 0.3s;


}

.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    background-color: #f3fff5a8;
    opacity: .99;
    z-index: 100;
    width: 100%;
    height: 4rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.navbar {
    justify-content: end;
}

.nav {
    display: none;
}


.computer {

    display: flex;
}

.mobile {
    display: none;
}



@media screen and (max-width: 768px) {
    .computer {

        display: none;
    }

    .mobile {
        display: flex;
    }
}

.icon {
    display: flex;
    width: 10px;
    display: fixed;
}
</style>
