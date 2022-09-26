<template>
    <div class="main">
        <h1>{{ title }}</h1>

        <a href="#">
            <picture>
                <source srcset="../assets/mobile.png" media="(max-width: 500px)" />
                <source srcset="../assets/tablet_horizontal.jpg" media="(max-width: 768px)" />
                <source srcset="../assets/tablet_vertical.jpg" media="(max-width: 1024px)" />
                <img src="../assets/desktop.png" alt="">
            </picture>
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

img {
    margin-top: 4rem;
}
</style>
