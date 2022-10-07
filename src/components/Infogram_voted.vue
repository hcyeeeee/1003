
<template>
    <div class="section" id="result">
        <!-- <h3>{{ title }}</h3> -->
        <div class="map">
            <div class="orange">
                <h3>歷屆縣市長選舉版圖</h3>
            </div>
            <div class="infogram-embed" data-id="275decbe-fca5-4fee-b68e-a0f17e98d0ee" data-type="interactive"
                data-title="歷年縣市長選舉版圖"></div>

            <div
                style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px">
                <a href="https://infogram.com/275decbe-fca5-4fee-b68e-a0f17e98d0ee"
                    style="color:#989898!important;text-decoration:none!important;" target="_blank">歷年縣市長選舉版圖</a><br><a
                    href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;"
                    target="_blank" rel="nofollow">Infogram</a>
            </div>
            <div
                style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px">
                <a href="https://infogram.com/275decbe-fca5-4fee-b68e-a0f17e98d0ee"
                    style="color:#989898!important;text-decoration:none!important;" target="_blank">歷年縣市長選舉版圖</a><br><a
                    href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;"
                    target="_blank" rel="nofollow">Infogram</a>
            </div>
        </div>
    </div>
</template>

<script id="infogram_0_275decbe-fca5-4fee-b68e-a0f17e98d0ee" title="歷年縣市長選舉版圖"
src="https://e.infogram.com/js/dist/embed.js?ywv" type="text/javascript"></script>
<script>
export default {
    name: 'Result',
    data() {
        return {
            title: '歷年選舉',
        }
    },
}
</script>

<style scoped>
.map {
    background-color: rgb(255, 255, 255);
    margin: 2rem .5rem 1rem .5rem;
    border-radius: 20px 20px 0px 0px;
}

.orange {
    border-radius: 20px 20px 0px 0px;
    background: orange;

}

h3 {
    text-shadow: rgb(0 0 0 / 50%) 0px 2px 2px;
    color: white;
    margin: 1rem auto;
    padding: 1.2rem;
}


@media screen and (max-width: 500px) {
    h3 {
        text-shadow: rgba(48, 48, 48, 0.5) 0px 2px 2px;
        color: white;
        margin: 1rem auto;
        padding: 1.2rem;
        font-size: 1.2rem;
    }


}
</style>
