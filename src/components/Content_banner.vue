<template>
    <div class="main">
        <h1>{{ title }}</h1>

        <a href="#video">
            <img src="../assets/desktopbanner.jpg" />
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '九合一選舉',
        }
    },
}
</script>

<style scoped>
h1 {
    position: absolute;
    top: -100%;
}

.main,
.main a,
.main img {
    width: 100%;
}
</style>
