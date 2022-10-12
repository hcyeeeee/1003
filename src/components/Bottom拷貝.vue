<template>
    <div class="layout_addition">
        <div class="layout_bottom">
            <div id="main_nav" :class="{ fixed: active }">
              <a class="col-4 col-sm-3 col-md-2 col-lg" v-for="(title, index) of titles" :key="index" :href="title.link"
                    >{{ title.name }} 
               </a>
            </div>

            <!-- <div id="main_nav1" :class="{ fixed: active }">
                <a class="col-4 col-sm-3 col-md" v-for="(title, index) of titles" :key="index" :href="title.link"
                    >{{ title.name }} &nbsp;&nbsp; <font-awesome-icon v-if="index === 2" icon="fa-solid fa-caret-right"
                /></a>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titles: [
                {
                    name: `療癒毛孩`,
                    link: `#pet`,
                },
                {
                    name: `齊心抗疫`,
                    link: `#covid`,
                },
                {
                    name: `暖心故事`,
                    link: `#warm`,
                },
                {
                    name: `勵志人物`,
                    link: `#people`,
                },

                {
                    name: `國際暖聞`,
                    link: `#world`,
                },
                {
                    name: `公益送暖`,
                    link: `#good`,
                },
                {
                    name: `精選影音`,
                    link: `#video`,
                },
            ],
            active: false, // 控制nav高度到達條件就轉成true，並加入class="fixed"
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.active = window.scrollY > 700 ? true : false
        },
    },
}
</script>

<style scoped>
.fixed {
    z-index: 999 !important;
    position: fixed !important;
    top: 0 !important;
    overflow-y: hidden;
    /* overflow-y: hidden; Hide vertical scrollbar  */
    width: 100%;
    height: 80px;
    cursor: pointer;
    text-decoration: none;
}

.layout_bottom div {
    display: flex;
    background-color: #f0e4db;
    z-index: 999;
    width: 100%;
    height: 85px;
    position: absolute;
    bottom: 0;
    margin-bottom: -15px;
}

.layout_bottom a {
    margin: auto;
    text-align: center;
    color: var(--main_color);
    border-radius: 1px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
 
    margin: auto 1rem;
 

  align-items: center;
 background-color: #efece9;
  border: 0 solid #E2E8F0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1A202C;
  display: inline-flex;
  font-family: Inter, sans-serif;

  font-weight: 700;
  height: 56px;
  justify-content: center;
  line-height: 24px;
  overflow-wrap: break-word;

  text-decoration: none;
  width: auto;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

}



#main_nav1 {
    display: none;
}


@media screen and (max-width: 1024px) {
     .layout_bottom div {
        display: fixed;
        overflow: visible;
        overflow-y: hidden; /* Hide vertical scrollbar */
        z-index: 9999;
        width: 100%;
        height: 85px;
        position: absolute;
        margin-bottom: 0.5rem;
    }

    .fixed {
        z-index: 999 !important;
        position: fixed !important;
        top: 0 !important;
        /* overflow-y: hidden; Hide vertical scrollbar */

        width: 100%;
        height: 80px;
        cursor: pointer;
        text-decoration: none;
    }

    .layout_bottom a {
        
        margin: auto;
        text-align: center;
        color: var(--main_color);
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        margin-right: 15px;
    }

    .icon {
        position: absolute;
        top: 20px;
        height: 1.4rem;
        right: 20px;
        /* z-index: 100001; */
    }
}

@media screen and (max-width: 768px) {
    .layout_bottom div {
        display: fixed;
        overflow: visible;
        overflow-y: hidden; /* Hide vertical scrollbar */
        z-index: 9999;
        width: 100%;
        height: 85px;
        position: absolute;
        margin-bottom: -85px;
    }

    .fixed {
        z-index: 999 !important;
        position: fixed !important;
        top: 0 !important;
        /* overflow-y: hidden; Hide vertical scrollbar */

        width: 100%;
        height: 78px;
        cursor: pointer;
        text-decoration: none;
    }

    .layout_bottom a {
        margin: auto;
        text-align: center;
        color: var(--main_color);
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        margin-left: 18px;
    }

    .icon {
        position: absolute;
        top: 20px;
        height: 1.4rem;
        right: 20px;
        /* z-index: 100001; */
    }
}
</style>
