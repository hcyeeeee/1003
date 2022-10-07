<template>
    <div class="bottom">




        <router-link to="/" class="bottom2">
            <a href="/#news" @click="jump('news')">最新新聞</a>
        </router-link>

        <!-- <router-link to="/">
            <a href="/#district" @click="jump('dis')">地方選戰</a>
        </router-link> -->

        <!-- <router-link to="/">
            <a href="/#video" @click="jump('vid')">影音專區</a>
        </router-link> -->
        <router-link class="bottom2" to="/about">選將名單</router-link>
        <!-- <router-link to="/vote">歷年版圖</router-link> -->
        <router-link class="bottom2" to="/qa">修憲公投</router-link>
    </div>
</template>






<script>
export default {
    data() {
        return {


            menu: false,
            list: [
                {
                    title: '首頁',
                    anchor: '#voting',
                },
                {
                    title: '最新新聞',
                    anchor: '#profile',
                },
                {
                    title: '影音專區',
                    anchor: '#porcess',
                },
                {
                    title: 'LIVE新聞',
                    anchor: '#news',
                },
            ],
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        // menu() {
        //   this.isActive = !this.isActive;
        // },
        handleScroll() {
            this.active = window.scrollY < 700 ? true : false
        },
        toggle() {
            if (!this.isActive) {
                this.isActive = true;
            } else {
                this.isActive = false;
            }
        },
        jump(tag) {
            setTimeout(() => {
                console.log(tag);
                if (tag === 'news') {
                    window.location.hash = '#news'
                } else if (tag === 'dis') {
                    window.location.hash = '#district'
                } else {
                    window.location.hash = '#video'
                }
            }, 500);
        }

    },
}
</script>

<style>
.bottom {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #4e98a2;
    z-index: 999;
    background: #374674;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    /* background: -moz-linear-gradient(left, #679fdc 0%, #ece18c 49%, #b3d671 100%);
    background: -webkit-linear-gradient(left, #679fdc 0%, #ece18c 49%, #b3d671 100%);
    background: linear-gradient(to right, #679fdc 0%, #ece18c 49%, #b3d671 100%); */
    background: #cee3d2;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

}

.bottom a {
    width: 33.3%;
    padding: 1.2rem 0rem;
    color: rgb(36, 36, 36);
    /* font-weight: bolder; */
    text-align: center;


}




/* .bottom a:nth-child(1) {
    background-color: #374674;
} */


.bottom a:nth-child(2) {
    background: #83ad8c;
}

.bottom a:nth-child(3) {
    background-color: #a8c5ae;
}

.bottom a:hover {
    /* color: rgb(236, 236, 236) !important; */
    opacity: 1;
}

.bottom a::after {
    content: ""
}


.bottom2 {
    opacity: .9;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}




.bottom {
    display: none;
}

@media screen and (max-width: 768px) {
    .bottom {
        display: flex;
    }
}





.ya {}

/* Dropup Button */
.dropbtn {
    background: transparent;
    font-size: 16px;
    border: none;

}

/* The container <div> - needed to position the dropup content */
.dropup {
    position: relative;
    display: block;
}

/* Dropup content (Hidden by Default) */
.dropup-content {
    display: none;
    position: absolute;
    bottom: 50px;
    min-width: 140px;
    z-index: 1;

}

/* Links inside the dropup */
.dropup-content a {
    color: black;
    padding: 10px;
    text-decoration: none;
    display: contents;
    flex-direction: column;

}

/* Show the dropup menu on hover */
.dropup:hover .dropup-content {
    display: grid;


}

/* Change the background color of the dropup button when the dropup content is shown */
.dropup:hover .dropbtn {
    background-color: transparent;
}
</style>
