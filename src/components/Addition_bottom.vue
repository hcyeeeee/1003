<template>

    <div class="bottom">
        <router-link to="/" class="bottom2">最新新聞</router-link>
        <router-link class="bottom2" to="/about">選將名單</router-link>
        <!-- <router-link class="bottom2 " to="/form">
            政治術語大考驗
        </router-link> -->
        <a class="bottom2" v-bind:class="{ 'dropup': button_active_state }"
            v-on:click="button_active_state = !button_active_state">
            更多選舉資訊
            <div class="dropup-content " id="myDIV">
                <a href="https://bit.ly/3CFJQFt">歷年版圖</a>
                <a href="https://bit.ly/3erX5R7">熱門議題</a>
                <router-link to="/qa">
                    修憲公投
                </router-link>
                <a href="https://bit.ly/3T1xwFt"> 政治術語大考驗</a>
            </div>
        </a>

    </div>
</template>

<script>

</script>


<script>
export default {
    data() {
        return {
            button_active_state: false,
            active: false,
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
        },
         myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle(".dropup");
}

    },
}
</script>

<style>
.i-am-active {
    color: orange;
}

.mystyle {
    width: 100%;
    padding: 25px;
    background-color: coral;
    color: white;
    font-size: 25px;
    box-sizing: border-box;
}

.dropup {
    position: relative;
    display: inline-block;
}

.dropup-content {
    display: none;
    position: absolute;
    background-color: #e2f2d0;
    bottom: 50px;
    z-index: -1;
    padding: 20px 10px;
    width: 100%;
    border-radius: 10px 10px 0 0;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}



.dropup-content a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 1rem;


}


.dropup-content a:hover {
    background-color: #d0e6b0;

}


.dropup:hover .dropup-content {
    display: block;
    z-index: -1;
}

.bottom {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
    background: transparent;
    border-radius: 20px 20px 0px 0px;

}

.bottom2 {
    width: 33.333%;
    padding: 1rem 0rem;
    color: rgb(36, 36, 36);
    font-weight: 700;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;


}




.bottom2:nth-child(1) {
    background: #d0e6b0;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}


.bottom2:nth-child(2) {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 12px 0px;
    background: #e2f1d0;

}

.bottom2:nth-child(3) {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 12px 0px;
    background-color: #bbdb92;
}

.bottom2:nth-child(4) {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: #c7f0cf;
}

.bottom2:hover {
    /* color: rgb(236, 236, 236) !important; */
    opacity: 1;
    margin: -.5rem 0rem 0rem;
}

.bottom2::after {
    content: ""
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





/* Change the background color of the dropup button when the dropup content is shown */
.dropup:hover .dropbtn {
    background-color: transparent;
}
</style>
