<template>
  <div id="app">
    <div>
      <b-navbar toggleable="md" type="light" variant="light">
        <!-- logo -->
        <b-navbar-brand class="flex-logo logo">
          <a href="https://www.ftvnews.com.tw/" target="blank"> <img src="./assets/logo.png" alt="民視新聞網"></a>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">首頁</router-link>
          </b-navbar-nav>
          <!-- 下拉選單start -->
          <b-navbar-nav>
            <b-nav-item-dropdown text="新聞專區">
              <b-dropdown-item>
                <a href="https://www.ftvnews.com.tw/topics/election2022/#/news" @click="jump('news')">新聞專區</a>
              </b-dropdown-item>
              <b-dropdown-item>
                <a href="https://www.ftvnews.com.tw/topics/election2022/#/district" @click="jump('dis')">地方選戰</a>
              </b-dropdown-item>
              <b-dropdown-item>
                <a href="https://www.ftvnews.com.tw/topics/election2022/#/video" @click="jump('vid')">影音專區</a>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <!-- 下拉選單end -->
          <b-navbar-nav>
            <router-link to="/about">選將名單</router-link>
          </b-navbar-nav>

          <!-- 下拉選單start -->
          <b-navbar-nav>
            <b-nav-item-dropdown text="選舉匯報">
              <b-dropdown-item>
                <router-link to="/qa">修憲公投</router-link>
              </b-dropdown-item>
              <a class="ddd" href="https://bit.ly/3erX5R7">熱門議題</a>
              <a class="ddd" href="https://bit.ly/3CFJQFt">歷年版圖</a>

            </b-nav-item-dropdown>
          </b-navbar-nav>
          <!-- 下拉選單end -->
          <a class="ddd" href="https://bit.ly/3T1xwFt"> 政治術語大考驗</a>
        </b-collapse>
      </b-navbar>
    </div>
    <AdditionButton />
    <router-view />
  </div>
</template>

<script>

import AdditionButton from './components/Addition_bottom.vue'

export default {

  name: 'App',
  components: {
    AdditionButton,
  },
  methods: {
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
  top: 3.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.fa-solid,
.fas {
  font-weight: 900;
  color: rgb(98, 96, 96);
}

#navbar {
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


#navbar a {
  color: black;
  color: rgb(90, 87, 87);
}


#navbarBtn {
  display: flex;
}

#navbar {
  display: none;
}

.bg-light {
  opacity: 0.9;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

/* logo  start*/
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

/* logo end*/

a {
  font-size: 1.2rem;
  margin: 1rem;
  display: block;
  color: black;
  font-weight: bolder;
  transition: 0.3s;


}


.navbar {
  justify-content: start;
  position: fixed;
  z-index: 999;
  width: 100%;
  opacity: .9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.nav {
  display: none;
}

.nav a {
  margin: 0rem 1rem;
  text-align: center;
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
  color: black;
  font-weight: bolder;
  transition: 0.3s;
  text-align: center;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: end;
}


.bg-light {
  --bs-bg-opacity: 1;
  /* background-color: rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important; */
  background-color: #f3fff5 !important;
  ;
}

.nav-item {
  color: rgb(32, 32, 32);
  font-weight: bolder;
  border-bottom: none;
  margin: 0.5rem;
}

b-navbar {
  position: fixed;
}

@media screen and (max-width: 768px) {
  #navbarBtn {
    display: none;
  }


}

.ddd {
  text-align: center;
  margin: 1rem;
}
</style>



  