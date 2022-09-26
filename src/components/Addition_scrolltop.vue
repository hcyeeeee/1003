<template>
    <div>
        <i @click="scrollTop" class="fad fa-2x fa-angle-up"></i>

    </div>
</template>

<script>
export default {
    methods: {
        scrollTop() {
            console.log(1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
    },
}
</script>

<style scoped>
.fa-angle-up {
    position: fixed;
    right: 0.5rem;
    bottom: 5rem;
    color: rgb(172, 188, 162);
    background-color: rgb(226, 246, 214);
    cursor: pointer;
    background-color: #ffffffa6;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    border-radius: 10px;
    padding: 2px 5px;
    z-index: 1000;
    background-image: url('../assets/投票箱.png');
}
</style>
