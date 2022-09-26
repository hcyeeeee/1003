<template>
    <div class="section" id="video">
        <!-- 影音專區 -->
        <h3>{{ title }}</h3>
        <div class="line">
            <img src="../assets/選舉章icon.png" alt="">
            <hr>
            <img src="../assets/選舉章icon.png" alt="">
        </div>
        <div class="section-box">
            <h4>台灣最前線</h4>
            <br>
            <div class="iframe-container">

                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO0BrUIa70CS1_PoeAghdM3K"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <br>
            <h4>辣新聞152</h4>
            <br>

            <div class="iframe-container">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO2IzwPDbwG0K8TXleBbl4oN"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <br>
            <h4>台灣向前行</h4>
            <br>
            <div class="iframe-container">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO0px2iZrtznovVe10LfcfJO"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
        <!-- live直播 -->
        <h3>{{ title2 }}</h3>
        <div class="line" id="live">
            <img src="../assets/選舉章icon.png" alt="">
            <hr>
            <img src="../assets/選舉章icon.png" alt="">
        </div>
        <div class="section-box">
            <div class="iframe-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ylYJSBUgaMA"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '影音專區',
            title2: '直播新聞',
        }
    },
}
</script>

<style scoped>
.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
}

.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

/* 4x3 縱橫比 */
.iframe-container-4x3 {
    padding-top: 75%;
}

.line {
    display: flex;
    padding: 0px;


}

.line img {
    width: 60px;
    padding: 8px;
}


hr {
    align-items: center;

    font-weight: 900;
    width: 100%;
    margin: auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.section-box {
    margin: 1rem auto;
    padding: 1rem;
    margin-bottom: 5rem;
}

h4 {
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    color: #595757;
}
</style>
