<template>
    <div class="section">
        <h3>{{ title }}</h3>
        <!-- 電腦版導覽列 -->
        <b-tabs class="desktop" content-class="mt-3" fill>
            <ul class="desktop">
                <b-tab title="北部">
                    <li @click="getData_ftvNews">宜蘭市</li>
                    <li @click="getData_ftvNews1">基隆市</li>
                    <li @click="getData_ftvNews2">台北市</li>
                    <li @click="getData_ftvNews3">新北市</li>
                    <li @click="getData_ftvNews4">桃園市</li>
                    <li @click="getData_ftvNews5">新竹市</li>
                    <li @click="getData_ftvNews6">新竹縣</li>
                </b-tab>
                <b-tab title="中部">
                    <!-- 中部 -->
                    <li @click="getData_ftvNews7">苗栗縣</li>
                    <li @click="getData_ftvNews8">台中市</li>
                    <li @click="getData_ftvNews9">彰化縣</li>
                    <li @click="getData_ftvNews10">南投縣</li>
                    <li @click="getData_ftvNews11">雲林縣</li>
                </b-tab>
                <b-tab title="南部">
                    <!-- 南部 -->
                    <li @click="getData_ftvNews12">嘉義市</li>
                    <li @click="getData_ftvNews13">嘉義縣</li>
                    <li @click="getData_ftvNews14">台南市</li>
                    <li @click="getData_ftvNews15">高雄市</li>
                    <li @click="getData_ftvNews16">屏東縣</li>
                </b-tab>
                <b-tab title="東部">
                    <!-- 東部 -->
                    <li @click="getData_ftvNews17">花蓮縣</li>
                    <li @click="getData_ftvNews18">台東縣</li>
                </b-tab>
                <b-tab title="離島">
                    <!-- 離島 -->
                    <li @click="getData_ftvNews19">澎湖縣</li>
                    <li @click="getData_ftvNews20">金門縣</li>
                    <li @click="getData_ftvNews21">連江縣</li>
                </b-tab>
            </ul>
        </b-tabs>
        <!-- 手機版導覽列 -->
        <b-tabs class="mobile" content-class="mt-3" fill>
            <ul class="mobile">
                <b-tab title="北部">
                    <li @click="getData_ftvNews">宜蘭市</li>
                    <li @click="getData_ftvNews1">基隆市</li>
                    <li @click="getData_ftvNews2">台北市</li>
                    <li @click="getData_ftvNews3">新北市</li>
                    <li @click="getData_ftvNews4">桃園市</li>
                    <li @click="getData_ftvNews5">新竹市</li>
                    <li @click="getData_ftvNews6">新竹縣</li>
                </b-tab>
                <b-tab title="中部">
                    <!-- 中部 -->
                    <li @click="getData_ftvNews7">苗栗縣</li>
                    <li @click="getData_ftvNews8">台中市</li>
                    <li @click="getData_ftvNews9">彰化縣</li>
                    <li @click="getData_ftvNews10">南投縣</li>
                    <li @click="getData_ftvNews11">雲林縣</li>
                </b-tab>
                <b-tab title="南部">
                    <!-- 南部 -->
                    <li @click="getData_ftvNews12">嘉義市</li>
                    <li @click="getData_ftvNews13">嘉義縣</li>
                    <li @click="getData_ftvNews14">台南市</li>
                    <li @click="getData_ftvNews15">高雄市</li>
                    <li @click="getData_ftvNews16">屏東縣</li>
                </b-tab>
                <b-tab title="東部" class="lesscity">
                    <!-- 東部 -->
                    <li @click="getData_ftvNews17">花蓮縣</li>
                    <li @click="getData_ftvNews18">台東縣</li>
                </b-tab>
                <b-tab title="離島" class="lesscity">
                    <!-- 離島 -->
                    <li @click="getData_ftvNews19">澎湖縣</li>
                    <li @click="getData_ftvNews20">金門縣</li>
                    <li @click="getData_ftvNews21">連江縣</li>
                </b-tab>
            </ul>
        </b-tabs>




        <div class="section-box">
            <!-- 電腦版內容 -->
            <div class="news-layout desktop">
                <div class="news" v-for="(item, index) of newsInfo" :key="index">
                    <div class="content-layout">
                        <img :src="' https://www.ftvnews.com.tw/topics/test/image/'+ item.party +'.jpg'" alt="新聞封面照" />
                        <div class="porfile ">
                            <h2 class="name">{{ item.name }}</h2>
                            <p class="party">{{ item.party }}</p>
                            <p class="party">{{ item.zone }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 手機版版內容 -->
            <div class="news-layout mobile1">
                <div class="news" v-for="(item, index) of newsInfo" :key="index">
                    <div class="content-layout">
                        <img :src="' https://www.ftvnews.com.tw/topics/test/image/'+ item.party +'.jpg'" alt="新聞封面照" />
                        <div class="porfile">
                            <h2 class="name">{{ item.name }}</h2>
                            <p class="party">{{ item.party }}</p>
                            <p class="party">{{ item.zone }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '縣市議員候選人',
            newsInfo: [],
        }
    },
    methods: {
        // Yilan
        getData_ftvNews() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Yilan.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    console.log(this.newsInfo[1].zone)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Keelung 
        getData_ftvNews1() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Keelung.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Keelung
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        // Taipei
        getData_ftvNews2() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Taipei.json')
                .then((response) => {
                    let data = response.data.Taipei
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Newtaipei
        getData_ftvNews3() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Newtaipei.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Newtaipei
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Taoyuan
        getData_ftvNews4() {

            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Taoyuan.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Taoyuan
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //新竹縣
        getData_ftvNews6() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/HsinchuCountry.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.HsinchuCountry
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Hsinchucity:
        getData_ftvNews5() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Hsinchucity.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Hsinchucity
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //苗栗縣
        getData_ftvNews7() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Miaoli.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Miaoli
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Taichung
        getData_ftvNews8() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Taichung.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Taichung
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Changhua
        getData_ftvNews9() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Changhua.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Changhua
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Nantou
        getData_ftvNews10() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Nantou.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Nantou
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Yunlin
        getData_ftvNews11() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Yunlin.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Yunlin
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Chiayicity
        getData_ftvNews12() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Chiayicity.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Chiayicity
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //ChiayiCountry
        getData_ftvNews13() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/ChiayiCountry.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ChiayiCountry
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Tainan
        getData_ftvNews14() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Tainan.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Tainan
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Kaohsiung
        getData_ftvNews15() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Kao.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Kao
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Pingtung
        getData_ftvNews16() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Pingtung.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Pingtung
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Hualien
        getData_ftvNews17() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Hualien.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Hualien
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Taitung
        getData_ftvNews18() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Tai.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Tai
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Penghu
        getData_ftvNews19() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Penghu.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Penghu
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Kinmen
        getData_ftvNews20() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Kinmen.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Kinmen
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        //Lienchiang
        getData_ftvNews21() {
            document.querySelectorAll('.news').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://www.ftvnews.com.tw/topics/test/Lienchiang.json')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.Lienchiang
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },

    },
    mounted() {
        this.getData_ftvNews()
    },
}
</script>

<style scoped>
.news-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    padding: 1rem;
}

@media screen and (max-width: 768px) {
    .news-layout {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .news-layout {
        grid-template-columns: 1fr 1fr;
    }

}

.line {
    display: flex;
    padding: 0px 30px;
}

.line img {
    width: 50px;
    padding: 5px;
}



hr {
    align-items: center;
    color: rgb(67, 67, 67);
    font-weight: bolder;
    width: 95%;
    margin: auto;
}



.news {
    transition: 0.5s;

}

.news:hover h2,
.news:hover p {
    color: rgb(42, 42, 42);
}

.news h2 {
    padding: 0.3rem 1rem;

    word-break: break-all;

}

@media screen and (max-width: 1000px) {
    .news h2 {
        padding: 0.3rem 1rem;
        /* width: 200px; */
        word-break: break-all;

    }
}


.news p {
    text-align: center;
    padding: 0.3rem 1rem;
    font-weight: lighter;
    word-break: break-all;
}

.news img {
    width: 120px;
    height: 120px;
    border-radius: 500px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}

ul {
    margin: 2rem;
}

.title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* 解決firefox不支援-webkit-line-clamp的問題 */
    line-height: 30px;
    max-height: 60px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0.3rem;
}

.mobile {
    display: none;
}

.mobile1 {
    display: none;
}



ul {
    display: flex;
    margin: auto;
    justify-content: center;
    flex-wrap: no-wrap;


}

ul li {
    text-align: center;
    margin: 1.2rem;
    padding: 1rem;
    opacity: .9;
    cursor: pointer;
    color: #2e2e2e;
    border-bottom: 3px solid #71b2e4;
    width: 100px;

}

ul li:before {
    content: '';
}


ul li:hover {
    background-color: rgb(217, 246, 201);
    color: #000000;
    opacity: 1;
}

ul li:active {
    background-color: rgb(217, 246, 201);
    color: #000000;
}

.news a div:nth-child(1) {
    overflow-y: hidden;
}

.btn_more {
    max-width: 300px;
    margin: 2rem auto;
    padding: 0.6rem;
    display: block;
    cursor: pointer;
    text-align: center !important;

}

.btn_more a {
    border: 1px solid #595757;
    border-radius: 30px;
    padding: 0.5rem 1rem;
    box-shadow: 1px 2px 3px gray;
    cursor: pointer;
    font-size: 1.2rem;
    opacity: .9;

}

.btn_more a:hover {
    background-color: rgb(217, 246, 201);
    color: #000000;
    opacity: 1;
}

.btn_more a:active {
    background: rgb(255, 255, 255, .8);
}

a {
    color: #2e2e2e;
}

.section-box {
    max-height: 800px;
    overflow-y: scroll;
    overflow-x: hidden;
}


/* 
.content-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
} */


/* .porfile {
    display: grid;
    padding: .2rem;
    grid-template-rows: 1fr 1fr;

} */

/* .name {
    font-size: 1.4rem;
    text-align: left;
}

.party {
    font-size: 1.2rem;
    text-align: left;

} */

.tab-pane {
    display: flex;
}

p {
    font-size: 1.2rem;
}

.section-box {
    max-width: 1200px;
}

.section {
    margin: 0rem auto;
    padding: 0 1rem;
    width: 100%;
    max-width: 1000px;
    padding: 0rem 1.5rem 0rem 1rem;
}

.lesscity {
    justify-content: center;
}


ul li:active {
    background-color: rgb(217, 246, 201);
    color: #000000;
}


@media screen and (max-width: 500px) {
    .title {
        font-size: 1.2rem;
    }

    .line {
        display: flex;
        padding: 0px;
    }

    .desktop {
        display: none;
    }

    .mobile {
        display: block;
        margin: auto;
        text-align: center;

    }

    .mobile1 {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-gap: 2rem;

    }

    ul li {
        text-align: center;
        margin: .5rem;
        padding: .5rem 1rem;
        width: fit-content;
        opacity: .9;
        cursor: pointer;
        color: #2e2e2e;
        font-size: 16px;
        width: 100px;
        border-bottom: 3px solid #80c1d3;
    }

    .news img {
        width: 80px;
        height: 80px;
        border-radius: 500px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    }

    .section-box {

        overflow-y: scroll;
        overflow-x: hidden;

    }


    .porfile {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

    }

    /* .content-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
    } */

    .name {
        font-size: 1.4rem;
        text-align: center;
    }

    .party {
        font-size: 1.2rem;
        text-align: center;

    }

    .news p {
        text-align: center;
        padding: 0.5rem;

    }

    p {
        margin: 0rem !important;
    }

    .news h2 {
        padding: 0rem;

        word-break: break-all;

    }

}
</style>
