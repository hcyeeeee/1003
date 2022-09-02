<template>
    <div class="section" id="result">
        <h3>{{ title }}</h3>
        <div
            class="infogram-embed"
            data-id="135ae998-7e35-4c67-a012-8eac86d3d7ac"
            data-type="interactive"
            data-title="中二補選 - 歷年投票"
        ></div>
        <div
            style="
                padding: 8px 0;
                font-family: Arial !important;
                font-size: 13px !important;
                line-height: 15px !important;
                text-align: center;
                border-top: 1px solid #dadada;
                margin: 0 30px;
            "
        ></div>
    </div>
</template>

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

<style scoped></style>
