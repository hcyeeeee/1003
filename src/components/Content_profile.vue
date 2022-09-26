<template>
    <div class="section" id="profile">
        <h3>{{ title }}</h3>
        <div class="section-box">
            <b-tabs content-class="mt-3" fill>
                <!-- 縣市 fg-->
                <b-tab title="北部">
                    <div class="grid">
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <!-- 縣市 -->
                                <b-tab title="基隆市">
                                    <b-tabs content-class="mt-3" fill>
                                        <!-- 選區 -->
                                        <b-tab title="第一選區" active>
                                            <b-tab title="第一選區">

                                            </b-tab>
                                        </b-tab>
                                        <b-tab title="第二選區">
                                            <ul>

                                            </ul>
                                        </b-tab>
                                        <b-tab title="第三選區">

                                        </b-tab>
                                        <b-tab title="第四選區">

                                        </b-tab>
                                        <b-tab title="第五選區">

                                        </b-tab>
                                        <b-tab title="第六選區">

                                        </b-tab>
                                        <b-tab title="第七選區">

                                        </b-tab>
                                    </b-tabs>

                                </b-tab>
                                <b-tab title="台北市">
                                    <b-tabs content-class="mt-3" fill>
                                        <!-- 選區 -->
                                        <b-tab title="第一選區" active>
                                            <b-tab title="第一選區">

                                            </b-tab>
                                        </b-tab>
                                        <b-tab title="第二選區">
                                            <ul>

                                            </ul>
                                        </b-tab>
                                        <b-tab title="第三選區">

                                        </b-tab>
                                        <b-tab title="第四選區">

                                        </b-tab>
                                        <b-tab title="第五選區">

                                        </b-tab>
                                        <b-tab title="第六選區">

                                        </b-tab>
                                        <b-tab title="第七選區">

                                        </b-tab>
                                    </b-tabs>

                                </b-tab>
                                <b-tab title="新北市">
                                    <b-tabs content-class="mt-3" fill>
                                        <!-- 選區 -->
                                        <b-tab title="第一選區" active>
                                            <b-tab title="第一選區">

                                            </b-tab>
                                        </b-tab>
                                        <b-tab title="第二選區">
                                            <ul>

                                            </ul>
                                        </b-tab>
                                        <b-tab title="第三選區">

                                        </b-tab>
                                        <b-tab title="第四選區">

                                        </b-tab>
                                        <b-tab title="第五選區">

                                        </b-tab>
                                        <b-tab title="第六選區">

                                        </b-tab>
                                        <b-tab title="第七選區">

                                        </b-tab>
                                    </b-tabs>

                                </b-tab>
                                <b-tab title="桃園市">
                                    <b-tabs content-class="mt-3" fill>
                                        <!-- 選區 -->
                                        <b-tab title="第一選區" active>
                                            <b-tab title="第一選區">

                                            </b-tab>
                                        </b-tab>
                                        <b-tab title="第二選區">
                                            <ul>

                                            </ul>
                                        </b-tab>
                                        <b-tab title="第三選區">

                                        </b-tab>
                                        <b-tab title="第四選區">

                                        </b-tab>
                                        <b-tab title="第五選區">

                                        </b-tab>
                                        <b-tab title="第六選區">

                                        </b-tab>
                                        <b-tab title="第七選區">

                                        </b-tab>
                                    </b-tabs>

                                </b-tab>
                                <b-tab title="新竹縣">
                                    <b-tabs content-class="mt-3" fill>
                                        <!-- 選區 -->
                                        <b-tab title="第一選區" active>
                                            <b-tab title="第一選區">

                                            </b-tab>
                                        </b-tab>
                                        <b-tab title="第二選區">
                                            <ul>

                                            </ul>
                                        </b-tab>
                                        <b-tab title="第三選區">

                                        </b-tab>
                                        <b-tab title="第四選區">

                                        </b-tab>
                                        <b-tab title="第五選區">

                                        </b-tab>
                                        <b-tab title="第六選區">

                                        </b-tab>
                                        <b-tab title="第七選區">

                                        </b-tab>
                                    </b-tabs>

                                </b-tab>
                                <b-tab title="新北市">
                                    <b-tabs content-class="mt-3" fill>
                                        <!-- 選區 -->
                                        <b-tab title="第一選區" active>
                                            <b-tab title="第一選區">

                                            </b-tab>
                                        </b-tab>
                                        <b-tab title="第二選區">
                                            <ul>

                                            </ul>
                                        </b-tab>
                                        <b-tab title="第三選區">

                                        </b-tab>
                                        <b-tab title="第四選區">

                                        </b-tab>
                                        <b-tab title="第五選區">

                                        </b-tab>
                                        <b-tab title="第六選區">

                                        </b-tab>
                                        <b-tab title="第七選區">

                                        </b-tab>
                                    </b-tabs>

                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '候選人介紹',
        }
    },

    computed: {
        getProfile() {
            return this.$store.state.guys
        },
    },
}
</script>

<style scoped>
h4 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

p {
    text-align: left;
    font-size: 1.2rem;
}

ul li {
    font-size: 1.2rem;
    margin: 1rem 0 1rem 2rem;
}

@media screen and (max-width: 768px) {

    p,
    ul li {
        font-size: 1rem;
    }
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
}

@media screen and (max-width: 500px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

.grid div {
    position: relative;
}

.grid div img:nth-child(1) {
    width: 100%;
    padding: 1rem;
}

.grid div img:nth-child(2) {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 64px;
}

.grid p {
    font-weight: bolder;
}

/* 財產申報＆pdf下載 樣式 */
a {
    font-size: 1.1rem;
    font-weight: bolder;
    transition: 0.3s;
    border: dashed 1px gray;
    color: #45588f;
    display: flex;
    margin: auto;
    padding: 1rem;
}

a:hover {
    color: #45588f;
}

.grid-inner {
    display: grid;
    grid-template-columns: 1fr 2fr;
}

@media screen and (max-width: 500px) {
    .grid-inner {
        grid-template-columns: 1fr;
    }
}

.opinion ul li {
    list-style: cjk-ideographic;
}

.opinion ul {
    padding: 2rem;
}
</style>
