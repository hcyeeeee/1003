<template>
    <div class="section" id="porcess">
        <h3>{{ title }}</h3>
        <div class="section-box">
            <div>
                <ul>
                    <li v-for="(item, index) of list" :key="index">
                        <span>{{ list[index].date }}</span>
                        <p>{{ list[index].project }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '補選程序',
            list: [
                {
                    date: '2021.12.8',
                    project: '候選人抽籤決定號次',
                },
                {
                    date: '2021.12.20',
                    project: '選舉人名冊編造完成',
                },
                {
                    date: '2021.12.29',
                    project: '公告候選人名單',
                },
                {
                    date: '2021.12.30 - 2021.1.8',
                    project: '辦理公辦政見發表會',
                },
                {
                    date: '2022.1.5前',
                    project: '公告選舉人人數',
                },
                {
                    date: '2022.1.9',
                    project: '投票、開票',
                },
                {
                    date: '2022.1.14前',
                    project: '審定當選人名單',
                },
                {
                    date: '2022.1.14',
                    project: '公告當選人名單',
                },
            ],
        }
    },
}
</script>

<style scoped>
.section-box div {
    padding: 1rem;
    text-align: center;
}

ul {
    display: inline-block;
    max-width: 390px;
    width: 100%;
    list-style-type: none;
}

ul li {
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
    padding: 1rem;
    position: relative;
    background-color: rgb(222, 222, 222);
    border-radius: 10px;
}

ul li::after {
    content: '|';
    position: absolute;
    bottom: -25px;
}

ul li:nth-last-child(1)::after {
    content: '';
}

ul li span {
    display: inline-flex;
    text-align: center;
    margin: 0 0.3rem;
    display: block;
}

ul li p {
    text-align: center;
    margin: 0;
}
</style>
