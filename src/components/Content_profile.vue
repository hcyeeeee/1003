<template>
    <div class="section" id="profile">
        <h3>{{ title }}</h3>
        <div class="section-box">

            <!-- 區域 -->
            <b-tabs content-class="mt-3" fill>
                <div class>
                    <b-tab title="北部">
                        <b-tabs content-class="mt-3" fill>
                            <b-tab title="基隆市">
                                <div class="layout" v-for="(item, index) of getProfile1" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile1[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile1[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile1[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile1[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="台北市">
                                <div class="layout" v-for="(item, index) of getProfile2" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile2[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile2[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile2[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile2[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="新北市">
                                <div class="layout" v-for="(item, index) of getProfile3" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile3[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile3[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile3[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile3[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="桃園市">
                                <div class="layout" v-for="(item, index) of getProfile4" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile4[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile4[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile4[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile4[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="新竹縣">
                                <div class="layout" v-for="(item, index) of getProfile6" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile6[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile6[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile6[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile6[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="新竹市">
                                <div class="layout" v-for="(item, index) of getProfile5" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile5[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile5[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile5[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile5[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="宜蘭縣">
                                <div class="layout" v-for="(item, index) of getProfile" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </b-tab>
                    <b-tab title="中部">
                        <b-tabs content-class="mt-3" fill>
                            <b-tab title="苗栗縣">
                                <div class="layout" v-for="(item, index) of getProfile7" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile7[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile7[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile7[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile7[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="台中市">
                                <div class="layout" v-for="(item, index) of getProfile8" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile8[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile8[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile8[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile8[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="彰化縣">
                                <div class="layout" v-for="(item, index) of getProfile9" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile9[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile9[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile9[index].experience.edu" :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile9[index].experience.exp" :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="南投縣">
                                <div class="layout" v-for="(item, index) of getProfile10" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile10[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile10[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile10[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile10[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="雲林縣">
                                <div class="layout" v-for="(item, index) of getProfile11" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile11[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile11[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile11[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile11[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </b-tab>

                    <b-tab title="南部">
                        <b-tabs content-class="mt-3" fill>
                            <b-tab title="嘉義市">
                                <div class="layout" v-for="(item, index) of getProfile12" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile12[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile12[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile12[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile12[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="嘉義縣">
                                <div class="layout" v-for="(item, index) of getProfile14" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile14[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile14[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile14[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile14[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="台南市">
                                <div class="layout" v-for="(item, index) of getProfile14" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile14[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile14[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile14[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile14[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="高雄市">
                                <div class="layout" v-for="(item, index) of getProfile15" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile15[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile15[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile15[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile15[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="屏東縣">
                                <div class="layout" v-for="(item, index) of getProfile16" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile16[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile16[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile16[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile16[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </b-tab>

                    <b-tab title="東部">
                        <b-tabs content-class="mt-3" fill>
                            <b-tab title="花蓮縣">
                                <div class="layout" v-for="(item, index) of getProfile17" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile17[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile17[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile17[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile17[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="台東縣">
                                <div class="layout" v-for="(item, index) of getProfile18" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile18[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile18[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile18[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile18[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </b-tab>
                    <b-tab title="離島">
                        <b-tabs content-class="mt-3" fill>
                            <b-tab title="澎湖縣">
                                <div class="layout" v-for="(item, index) of getProfile20" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile20[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile20[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile20[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile20[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="金門縣">
                                <div class="layout" v-for="(item, index) of getProfile20" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile20[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile20[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile20[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile20[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="連江縣">
                                <div class="layout" v-for="(item, index) of getProfile21" :key="index">
                                    <div class="layout_card">
                                        <img class="person_img" :src="getProfile21[index].photo" alt="personal"
                                            loading="lazy">
                                        <img class="party_img" :src="getProfile21[index].party_photo" alt="party"
                                            loading="lazy">
                                        <!-- person -->
                                        <div class="text">
                                            <h4>{{item.name}}</h4>
                                            <!-- party -->
                                            <h4>{{item.party}}</h4>
                                            <!-- edu -->
                                            <p class="edu_title">最高學歷</p>
                                            <p class="edu_content"
                                                v-for="(item, index) of getProfile21[index].experience.edu"
                                                :key="index">
                                                {{item}}
                                            </p>
                                            <!-- exp -->
                                            <p class="exp_title">經歷</p>
                                            <p class="exp_content"
                                                v-for="(item, index) of getProfile21[index].experience.exp"
                                                :key="index">
                                                {{item}}</p>
                                        </div>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </b-tab>
                </div>
            </b-tabs>
            <!-- zone end-->



        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: "候選人介紹",
            list: [
                {
                    area: "北部",
                    city: [
                        "基隆市",
                        "台北市",
                        "新北市",
                        "桃園市",
                        "新竹縣",
                        "新竹市",
                    ],

                    district: ["第一中部選區", "第二選區", "第三選區", "第四選區", "第五選區", "第六選區",],


                },
                {
                    area: "中部",
                    city: ["苗栗縣", "台中市", "彰化縣", "南投縣", "雲林縣",],
                    district: ["第一中部選區", "第二選區", "第三選區", "第四選區", "第五選區", "第六選區",],
                },
                {
                    area: "南部",
                    city: ["嘉義市", "嘉義縣", "台南市", "高雄市", "屏東縣",],
                    district: ["南第一選區", "第二選區", "第三選區", "第四選區", "第五選區", "第六選區",],
                },
                {
                    area: "東部",
                    city: ["花蓮縣", "台東縣",],
                    district: ["東第一選區", "第二選區", "第三選區", "第四選區", "第五選區", "第六選區",],
                },
                {
                    area: "離島",
                    city: ["澎湖縣", "金門縣", "連江縣",],
                    district: ["離島第一選區", "第二選區", "第三選區", "第四選區", "第五選區", "第六選區",],
                },
            ],


        }
    },

    computed: {
        getProfile() {
            return this.$store.state.Yilan
        },
        getProfile1() {
            return this.$store.state.Keelung
        },
        getProfile2() {
            return this.$store.state.Taipei
        },
        getProfile3() {
            return this.$store.state.Newtaipei
        },
        getProfile4() {
            return this.$store.state.Taoyuan
        },
        getProfile6() {
            return this.$store.state.HsinchuCountry
        },
        getProfile5() {
            return this.$store.state.HsinchuCity
        },
        getProfile7() {
            return this.$store.state.Miaoli
        },
        getProfile8() {
            return this.$store.state.Taichung
        },
        getProfile9() {
            return this.$store.state.Changhua
        },
        getProfile10() {
            return this.$store.state.Nantou
        },
        getProfile11() {
            return this.$store.state.Yunlin
        },
        getProfile12() {
            return this.$store.state.ChiayiCity
        },
        getProfile13() {
            return this.$store.state.ChiayiCountry
        },
        getProfile14() {
            return this.$store.state.Tainan
        },
        getProfile15() {
            return this.$store.state.Kaohsiung
        },
        getProfile16() {
            return this.$store.state.Pingtung
        },
        getProfile17() {
            return this.$store.state.Hualien
        },
        getProfile18() {
            return this.$store.state.Taitung
        },
        getProfile19() {
            return this.$store.state.Penghu
        },
        getProfile20() {
            return this.$store.state.Kinmen
        },
        getProfile21() {
            return this.$store.state.Lienchiang
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

.exp_title::before {
    content: "  ";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #FFA255;
    display: inline-block;
    margin: 1rem .5rem -3px 0px;
}

.edu_title::before {
    text-align: left;
    font-size: 1.2rem;
    content: "  ";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #FFA255;
    display: inline-block;
    margin: 1rem .5rem -3px 0px;
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

/* .grid {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem; */


@media screen and (max-width: 500px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

.grid div {
    position: relative;
}

.person_img {
    width: 150px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin-top: 2rem;
    border-radius: 100%;
}

.party_img {
    position: relative;
    top: -4.5rem;
    right: -3.5rem;
    width: 50px;
}


.layout_card {
    height: fit-content;
    background-color: white;
    border-radius: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 1rem;
    margin: .5rem;
    width: 300px;
    overflow-y: scroll;
    height: 600px;

}

.layout {
    max-width: 1000px;
    overflow-x: scroll;
    display: flex;
    flex-wrap: nowrap;

}

.nav_city {
    overflow-x: scroll;
}

.nav_city {

    grid-gap: 1.5rem;
    padding: 1rem;
}


b-tab {
    color: yellow
}

img {
    width: 100px;
    margin: auto;
    display: block;
}


.line {
    display: flex;
    padding: 0px
}

.line img {
    width: 40px;
    padding: 3px;
}



.line1 {
    align-items: center;
    color: rgb(102, 102, 102);
    width: 100%;
    margin: auto;
    border-top: 2px dashed rgb(92, 92, 92);
}

.line2 {
    align-items: center;
    color: rgb(102, 102, 102);
    width: 100%;
    margin: auto;
    border-top: 2px solid rgb(92, 92, 92);
}


p {
    font-family: "Noto Sans TC";
    text-align: left;
    margin: 0.5rem 0 1rem 0;
    padding: 0rem 1rem;
    line-height: 1.5rem;
    font-size: 1rem;
}

.text {

    margin-top: -2rem;
}

.tab-content>.active {
    display: -webkit-inline-box;
    overflow-x: scroll;
    max-width: 1000px;
}
</style>
