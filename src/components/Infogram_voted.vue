<template>
    <div class="section" id="result">
        <h3>{{ title }}</h3>

        <!-- 選舉版圖 -->
        <div class="map">
            <div class="orange">
                <h3>歷年縣市長選舉版圖</h3>
            </div>
            <div class="infogram-embed" data-id="11e230be-6d50-4957-8ca9-1b98c0267884" data-type="interactive"
                data-title="election"></div>
            <div
                style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px">
                <a href="https://infogram.com/11e230be-6d50-4957-8ca9-1b98c0267884"
                    style="color:#989898!important;text-decoration:none!important;" target="_blank">election</a><br><a
                    href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;"
                    target="_blank" rel="nofollow">Infogram</a>
            </div>
        </div>

        <!-- 選舉版圖 -->
        <div class="map">
            <div class="orange">
                <h3>歷年縣市長選舉版圖</h3>
            </div>
            <div class="infogram-embed" data-id="11e230be-6d50-4957-8ca9-1b98c0267884" data-type="interactive"
                data-title="election"></div>
            <div
                style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px">
                <a href="https://infogram.com/11e230be-6d50-4957-8ca9-1b98c0267884"
                    style="color:#989898!important;text-decoration:none!important;" target="_blank">election</a><br><a
                    href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;"
                    target="_blank" rel="nofollow">Infogram</a>
            </div>
        </div>

    </div>
</template>

<script id="infogram_0_fa1fe8a2-9c0e-43af-b74d-bc21ec32fe85" title="歷年版圖（2022九合一選舉用）"
src="https://e.infogram.com/js/dist/embed.js?RYS" type="text/javascript"></script>
<script>
export default {
    name: 'Result',
    data() {
        return {
            // title: '歷年選舉',
        }
    },
}
</script>

<style scoped>
.map {
    background: white;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: 2rem auto
}

.orange {
    background: #f8a240;
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 20px 20px 0px 0px;
}

h3 {
    margin: 1.2rem auto;
}
</style>
