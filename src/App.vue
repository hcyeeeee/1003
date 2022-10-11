<template>
  <div id="app">
    <div class="header">
      <!-- logo -->
      <div class="flex-logo logo">
        <a href="https://www.ftvnews.com.tw/" target="blank"> <img src="./assets/logo.png" alt="民視新聞網"></a>
      </div>
      <!-- desktop -->
      <nav class=" computer navbar">
        <router-link to="/">首頁</router-link>
        <router-link to="/about">選將名單</router-link>
        <!-- <router-link to="/vote">歷年版圖</router-link> -->
        <a href="https://bit.ly/3CFJQFt">歷年版圖</a>
        <router-link to="/qa">修憲公投</router-link>
        <!-- <router-link to="/">
          <a href="/#district" @click="jump('dis')">地方選戰</a>
        </router-link> -->
        <!-- <router-link to="/">
          <a href="/#news" @click="jump('news')">新聞專區</a>
        </router-link> -->
        <router-link to="/">
          <a href="/#video" @click="jump('vid')">影音專區</a>
        </router-link>
      </nav>


      <!-- mobile
      <div class="fad fa-2x fa-bars mobile" @click="menu">
        <nav class="nav" v-on:click="menu = !menu">
          <router-link to="/">首頁</router-link>
          <hr>
          <router-link to="/about">選將名單</router-link>
          <hr>
          <router-link to="/vote">修憲公投</router-link>
          <hr>

          <router-link to="/">
            <a href="/#district" @click="jump('dis')">地方選戰</a>
          </router-link>

          <hr>
          <router-link to="/">
            <a href="/#news" @click="jump('news')">新聞專區</a>
          </router-link>

          <hr>
          <router-link to="/">
            <a href="/#video" @click="jump('vid')">影音專區</a>
          </router-link>
          <hr>
        </nav>
      </div> -->
    </div>
    <!-- <AdditionScrolltop /> -->
    <AdditionButton />
    <router-view />
  </div>
</template>

<script>
// import AdditionScrolltop from './components/Addition_scrolltop.vue'
import AdditionButton from './components/Addition_bottom.vue'
export default {

  name: 'App',
  components: {
    AdditionButton,
    // AdditionScrolltop,
  },

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
      }, 100);
    }

  },
  mounted() {
    this.scroll()
    this.moveBar()
  },
}
</script>


<!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style> -->
<style scoped>
::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}

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
  /* content: '\f061'; */
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
  margin: 1rem;
  display: block;
  color: #595757;
  font-weight: bolder;
  transition: 0.3s;


}

.header {
  display: grid;
  grid-template-columns: 1fr 2fr;
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

.nav a {
  margin: 0rem 1rem;
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
    display: block;
  }

}

.icon {
  display: flex;
  width: 10px;
  display: fixed;
}

/* .tab-content {
  overflow: scroll;
  
} */

::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}

.section {
  max-width: 1200px
}

nav a {
  font-size: 1.2rem;
  margin: 0rem 1rem;
  display: block;
  color: #595757;
  font-weight: bolder;
  transition: 0.3s;
}
</style>



  