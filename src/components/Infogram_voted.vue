<template>
    <div class="section" id="result">
        <h3>{{ title }}</h3>

        <iframe src="https://e.infogram.com/fa1fe8a2-9c0e-43af-b74d-bc21ec32fe85?src=embed" title="歷年版圖（2022九合一選舉用）"
            width="1007" height="3825" scrolling="no" frameborder="0" style="border:none;"
            allowfullscreen="allowfullscreen"></iframe>
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

<style scoped>

</style>
