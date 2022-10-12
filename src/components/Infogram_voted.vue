
<template>
    <div class="section" id="result">
        <h2>歷年版圖</h2>
        <!-- 歷屆縣市長選舉版圖 -->
        <div class="map">
            <div class="orange">
                <h3>歷屆縣市長選舉版圖</h3>
            </div>
            <div class="infogram-embed" data-id="275decbe-fca5-4fee-b68e-a0f17e98d0ee" data-type="interactive"
                data-title="歷年縣市長選舉版圖"></div>
            <div
                style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;margin:0 30px">
            </div>
        </div>
        <!-- 2018縣市長選舉得票統計 -->
        <div class="map">
            <div class="orange">
                <h3>2018縣市長選舉得票統計</h3>
            </div>
            <div class="infogram-embed" data-id="1bb3f39c-dcd8-4c0b-bd87-a06b60720e5d" data-type="interactive"
                data-title="2018縣市長選舉得票統計"></div>
            <div
                style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;margin:0 30px">

            </div>
        </div>

        <!-- 2018縣市議員當選席次 -->
        <div class="map">
            <div class="orange">
                <h3>2018縣市議員當選席次</h3>
            </div>
            <div class="infogram-embed" data-id="703de62a-676a-480e-ae68-b079245c0baa" data-type="interactive"
                data-title="2018各縣市議員當選席次"></div>
            <div
                style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;margin:0 30px">

            </div>
        </div>


    </div>
</template>

<script>

export default {
    name: 'Result',
    data() {
        return {
            title: '歷年版圖',
        }
    },
}

</script>
<script>
  
    !function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");
</script>


<style scoped>
.map {
    background-color: rgb(255, 255, 255);
    margin: 2rem .5rem 1rem .5rem;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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
