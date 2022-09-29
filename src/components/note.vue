<div class="layout">
    <div class="layout_card">
<img class="person_img" src="../assets/無黨籍.png" alt="">
<img class="party_img" src="../assets/無黨籍.png" alt="">
<!-- person -->
<div class="text">
    <h4>蔣萬安</h4>
    <!-- party -->
    <h4>中國國民黨</h4>
    <!-- edu -->
    <p class="edu_title">最高學歷</p>
    <p class="edu_content">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corporis reiciendis perferendis rem saepe
    </p>
    <!-- exp -->
    <p class="exp_title">經歷</p>
    <p class="exp_content">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corporis reiciendis perferendis rem saepe
        itae blanditiis dolor autem sunt tempora
        placeat porro!</p>
</div>
    </div>
</div>



                        <!-- 分隔線1start -->
<div class="line">
                            <img src="../assets/選舉章icon.png" alt="">
                            <hr class="line2">
                            <img src="../assets/選舉章icon.png" alt="">
                        </div>
                        <!-- 分隔線end -->

    <!-- zone start -->
    <b-tabs content-class="mt-3" fill>
        <div class v-for="(item, index) of list[index].district" :key="index">
            <b-tab :title="item">





            </b-tab>
        </div>
    </b-tabs>
     <!-- zone zone -->
                        [[["Index of Happiness","09:00","10:00","11:00","12:00","13:00"],["Eden",219,532,520,199,302],["Shambhala",408,938,328,100,727],["Avalon",402,584,838,340,246],["Camelot",380,841,127,255,517],["El Dorado",313,489,291,950,934],["Atlantis",937,922,462,215,754]]]



                             <!-- 區域 -->
            <b-tabs content-class="mt-3" fill>
                <div class v-for="(item, index) of list" :key="index">
                    <b-tab :title="list[index].area">
                        <!-- 城市 start -->
                        <b-tabs content-class="mt-3" fill>
                            <div class="cardd" v-for="(item, index) of list[index].city" :key="index">
                                <b-tab :title="item">

                                    
                                    <div class="layout" v-for="(item, index) of getProfile" :key="index">
                                        {{index}}
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
                                                    v-for="(item, index) of getProfile[index].experience.edu"
                                                    :key="index">{{item}}
                                                </p>
                                                <!-- exp -->
                                                <p class="exp_title">經歷</p>
                                                <p class="exp_content"
                                                    v-for="(item, index) of getProfile[index].experience.exp"
                                                    :key="index">
                                                    {{item}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </b-tab>
                            </div>
                        </b-tabs>
                        <!-- 城市 end-->
                    </b-tab>
                </div>
            </b-tabs>
            <!-- zone end-->