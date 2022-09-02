<template>
    <div class="section" id="video">
        <h3>{{ title }}</h3>
        <div class="section-box">
            <div class="iframe-container">
                <iframe src="https://www.youtube.com/embed/XGEmg3vhrzU" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

        </div>
        <div class="section-box">
            <div class="iframe-container">
                <iframe src="https://www.youtube.com/embed/XGEmg3vhrzU" title="YouTube video player" frameborder="0"
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
</style>
