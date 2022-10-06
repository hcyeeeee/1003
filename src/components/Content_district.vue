<template>
    <div class="section" id="district">
        <h3>{{ title }}</h3>
        <ul class="desktop">
            <li @click="get_ftvNews">台北市</li>
            <li @click="get_ftvNews1">新北市</li>
            <li @click="get_ftvNews2">桃園市</li>
            <li @click="get_ftvNews3">新竹市</li>
            <li @click="get_ftvNews4">台中市</li>
            <li @click="get_ftvNews5">台南市</li>
            <li @click="get_ftvNews6">高雄市</li>




        </ul>

        <ul class="mobile">
            <li @click="get_ftvNews7">台北市</li>
            <li @click="get_ftvNews8">新北市</li>
            <li @click="get_ftvNews9">桃園市</li>
            <li @click="get_ftvNews10">新竹市</li>
            <li @click="get_ftvNews11">台中市</li>
            <li @click="get_ftvNews12">台南市</li>
            <li @click="get_ftvNews13">高雄市</li>

        </ul>

        <div class="line">
            <img src="../assets/選舉章icon.png" alt="">
            <hr>
            <img src="../assets/選舉章icon.png" alt="">


        </div>

        <div class="section-box">
            <div class="news-layout desktop">
                <div class="news1" v-for="(item, index) of newsInfo" :key="index">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                        <div>
                            <img :src="item.Image" alt="新聞封面照" />
                        </div>
                        <div>
                            <h2 class="title">{{ item.Title }}</h2>
                        </div>
                        <div>
                            <p>{{ item.CreateDate }}</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="news-layout mobile1">
                <div class="news1" v-for="(item, index) of newsInfo" :key="index">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                        <div>
                            <img :src="item.Image" alt="新聞封面照" />
                        </div>
                        <div>
                            <h2 class="title">{{ item.Title }}</h2>
                        </div>
                        <div>
                            <p>{{ item.CreateDate }}</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="btn_more">
                <a href="https://www.ftvnews.com.tw/tag/六都選戰/" target="blank">更多新聞</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '地方選戰',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ],
            district: '',
            newsInfo: [],
        }
    },
    methods: {
        get_ftvNews() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台北市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews1() {

            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新北市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews2() {

            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews3() {

            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews4() {

            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台中市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },

        get_ftvNews5() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台南市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews6() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=高雄市選戰&Page=1&sp=6')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews7() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台北市選戰&Page=1&sp=4')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews8() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新北市選戰&Page=1&sp=4')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews9() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=4')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews10() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=4')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews11() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台中市選戰&Page=1&sp=4')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews12() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台南市選戰&Page=1&sp=4')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                    // console.log(this.newsInfo)
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        get_ftvNews13() {
            document.querySelectorAll('.news1').forEach((e) => e.remove())
            // eslint-disable-next-line no-undef
            axios
                .get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=高雄市選戰&Page=1&sp=4')
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
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
        this.get_ftvNews()
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
        grid-template-columns: 1fr;
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



.news1 {
    transition: 0.5s;
    border-radius: 0 0 10px 10px;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.news1:hover {
    display: block;
    background-color: #cae3bb;
    text-decoration: none !important;
}

.news1:hover h2,
.news1:hover p {
    color: rgb(42, 42, 42);
}

.news1 h2 {
    padding: 0.3rem 1rem;
}

.news1 p {
    text-align: left;
    margin: 20px 0 0 0;
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
    font-weight: lighter;
}

.news1 img {
    width: 100%;
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

h3 {
    margin: 1rem 0 1rem 0;
}



ul {
    display: flex;
    margin: auto;
    justify-content: center;
    flex-wrap: no-wrap;


}

ul li {
    margin: 0.5rem;
    border: 1px solid;
    border-radius: 30px;
    padding: 0.5rem 1rem;
    opacity: .9;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    cursor: pointer;
    color: #2e2e2e;
    text-align: center;
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

.news1 a div:nth-child(1) {
    overflow-y: hidden;
    max-height: 150px;
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

@media screen and (max-width: 768px) {
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
        display: -webkit-box;
        overflow-x: scroll;
        margin: auto 1.3rem;
    }

    .mobile1 {
        display: grid;
    }

    h3 {
        margin: -1rem 0 1rem 0;
    }

    ul li {

        margin: 0.4rem;
        border: 1px solid;
        border-radius: 30px;
        padding: .5rem 1rem;
        opacity: .9;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
        cursor: pointer;
        color: #2e2e2e;
        text-align: center;
        flex-wrap: no-wrap;
        font-display: swap;
    }

    ul {
        margin: auto;
        justify-content: start;
        flex-wrap: no-wrap;
        display: inline-block;

    }

    .section-box {
        max-height: fit-content;
    }
}
</style>
