<template>
    <div class="bottom">
        <!-- <a href="https://lihi1.cc/tFTMc">直播專區</a> -->
        <a href="https://lihi1.cc/Z6F3Q">即時開票</a>
        <a href="https://lihi1.cc/YkwdL">候選人介紹</a>
        <a href="https://lihi1.cc/kmZIC">最新新聞</a>
    </div>
</template>

<script>
export default {}
</script>

<style>
.bottom {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #374674;
    z-index: 999;
}

.bottom a {
    width: 33.3%;
    padding: 1rem;
    color: white;
    text-align: center;
}

.bottom a:nth-child(1) {
    background-color: #374674;
}

.bottom a:nth-child(2) {
    background-color: #425488;
}

.bottom a:nth-child(3) {
    background-color: #5063a2;
}

.bottom a:hover {
    color: white !important;
}
</style>
