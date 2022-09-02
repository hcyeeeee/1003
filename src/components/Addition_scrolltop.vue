<template>
    <div>
        <i @click="scrollTop" class="fad fa-3x fa-angle-up"></i>
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
    right: 0px;
    bottom: 4rem;
    color: #374674;
    cursor: pointer;
    background-color: #ffffffa6;
    box-shadow: 1px 2px 3px black;
    border: 1px solid black;
    border-radius: 10px;
    padding: 0 8px;
    z-index: 1000;
}
</style>
