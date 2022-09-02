<template>
    <div class="section" id="profile">
        <h3>{{ title }}</h3>
        <div class="section-box">
            <b-tabs content-class="mt-3" fill>
                <b-tab title="張烱春">
                    <div class="grid">
                        <div>
                            <h4>
                                <span class="fa-stack">
                                    <!-- The icon that will wrap the number -->
                                    <span class="fa fa-circle-o fa-stack-2x"></span>
                                    <!-- a strong element with the custom content, in this case a number -->
                                    <strong class="fa-stack-1x"> {{ getProfile[0].no }}</strong>
                                </span>
                                <div>
                                    {{ getProfile[0].party }}
                                </div>
                            </h4>
                            <div>
                                <img :src="getProfile[0].photo" loading="lazy" />
                                <img :src="getProfile[0].party_photo" alt="政黨" />
                            </div>
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷" active>
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[0].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[0].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見" class="opinion">
                                    <ul>
                                        <li v-for="(item, index) of getProfile[0].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="getProfile[0].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i>_財產申報資料</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of getProfile[0].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="林金連">
                    <div class="grid">
                        <div>
                            <h4>
                                <span class="fa-stack">
                                    <!-- The icon that will wrap the number -->
                                    <span class="fa fa-circle-o fa-stack-2x"></span>
                                    <!-- a strong element with the custom content, in this case a number -->
                                    <strong class="fa-stack-1x"> {{ getProfile[1].no }}</strong>
                                </span>
                                <div>
                                    {{ getProfile[1].party }}
                                </div>
                            </h4>
                            <div>
                                <img :src="getProfile[1].photo" loading="lazy" />
                                <img :src="getProfile[1].party_photo" alt="政黨" />
                            </div>
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷" active>
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[1].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[1].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見" class="opinion">
                                    <ul>
                                        <li v-for="(item, index) of getProfile[1].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="getProfile[1].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i>_財產申報資料</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of getProfile[1].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="李昇翰">
                    <div class="grid">
                        <div>
                            <h4>
                                <span class="fa-stack">
                                    <!-- The icon that will wrap the number -->
                                    <span class="fa fa-circle-o fa-stack-2x"></span>
                                    <!-- a strong element with the custom content, in this case a number -->
                                    <strong class="fa-stack-1x"> {{ getProfile[2].no }}</strong>
                                </span>
                                <div>
                                    {{ getProfile[2].party }}
                                </div>
                            </h4>
                            <div>
                                <img :src="getProfile[2].photo" loading="lazy" />
                                <img :src="getProfile[2].party_photo" alt="政黨" />
                            </div>
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷" active>
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[2].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[2].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見" class="opinion">
                                    <ul>
                                        <li v-for="(item, index) of getProfile[2].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="getProfile[2].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i>_財產申報資料</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of getProfile[2].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="林靜儀" active>
                    <div class="grid">
                        <div>
                            <h4>
                                <span class="fa-stack">
                                    <!-- The icon that will wrap the number -->
                                    <span class="fa fa-circle-o fa-stack-2x"></span>
                                    <!-- a strong element with the custom content, in this case a number -->
                                    <strong class="fa-stack-1x"> {{ getProfile[3].no }}</strong>
                                </span>
                                <div>
                                    {{ getProfile[3].party }}
                                </div>
                            </h4>
                            <div>
                                <img :src="getProfile[3].photo" loading="lazy" />
                                <img :src="getProfile[3].party_photo" alt="政黨" />
                            </div>
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷" active>
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[3].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[3].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見" class="opinion">
                                    <ul>
                                        <li v-for="(item, index) of getProfile[3].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="getProfile[3].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i>_財產申報資料</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of getProfile[3].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="顏寬恒">
                    <div class="grid">
                        <div>
                            <h4>
                                <span class="fa-stack">
                                    <!-- The icon that will wrap the number -->
                                    <span class="fa fa-circle-o fa-stack-2x"></span>
                                    <!-- a strong element with the custom content, in this case a number -->
                                    <strong class="fa-stack-1x"> {{ getProfile[4].no }}</strong>
                                </span>
                                <div>
                                    {{ getProfile[4].party }}
                                </div>
                            </h4>
                            <div>
                                <img :src="getProfile[4].photo" loading="lazy" />
                                <img :src="getProfile[4].party_photo" alt="政黨" />
                            </div>
                        </div>
                        <div>
                            <b-tabs content-class="mt-3" fill>
                                <b-tab title="經歷" active>
                                    <p>學歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[4].experience.edu" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                    <hr />
                                    <p>經歷</p>
                                    <ul>
                                        <li v-for="(item, index) of getProfile[4].experience.exp" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="政見" class="opinion">
                                    <ul>
                                        <li v-for="(item, index) of getProfile[4].opinion.opin" :key="index">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </b-tab>
                                <b-tab title="財產申報">
                                    <div class="grid-inner">
                                        <a :href="getProfile[4].property.file" target="_blank"
                                            ><i class="fad fa-lg fa-file-download"></i>_財產申報資料</a
                                        >
                                        <ul>
                                            <li v-for="(item, index) of getProfile[4].property.prop" :key="index">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </div>
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
    grid-template-columns: 1fr 2fr;
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
