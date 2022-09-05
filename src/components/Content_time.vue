<template>
    <div class="main">
        <section class="timeline">

            <ol>
                <li>
                    <time>1887年</time>

                </li>
                <li>
                    <time>1887年</time>
                </li>
                <li>
                    <time>1890年</time>

                </li>
                <li>
                    <time>1936年</time>

                </li>
                <li>
                    <time>1936年</time>

                </li>
            </ol>
        </section>



    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    position: absolute;
    top: -100%;
}

.main {
    margin: auto;
}

.main a,
.main img {
    width: 100%;
}


.timeline {
    margin: auto;
    overflow-x: scroll;
    height: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
}



.timeline ::-webkit-scrollbar * {
    display: none;
}



.timeline ol {
    margin-top: 1rem;
    font-size: 0;
    width: 100%;
    padding: 0;
    transition: all 1s;

}

.timeline ol li {
    position: relative;
    display: inline-block;
    list-style-type: none;
    width: 200px;
    height: 3px;
    background: rgb(252, 185, 185);
    margin-bottom: 7rem;
}



/* timelinedot */
.timeline ol li::after {
    margin: auto;
    content: '';
    position: absolute;
    top: 50%;
    bottom: 0;
    width: 15px;
    height: 15px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: rgb(252, 185, 185);
    cursor: pointer;
}
</style>
