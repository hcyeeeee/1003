<template>
    <div>
        <div class="header">
            <div class="logo">

                <a href=""> <img src="../assets/logo.png" alt="民視新聞網"></a>

            </div>
            <div class="navbar">
                <a v-for="(item, index) of list" :key="index" :href="item.anchor">
                    {{ item.title }}
                </a>
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

        menu() { },
    },
    mounted() {
        this.scroll()
        this.moveBar()
    },
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
    color: #595757;
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

.logo img {
    width: 200px;
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
    margin: 1rem;
    display: block;
    color: #595757;
    font-weight: bolder;
    transition: 0.3s;

}

.header {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.navbar {
    justify-content: end;
}
</style>
