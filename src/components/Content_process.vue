<template>
    <div>
        <img class="img" src="../assets/小可愛.png" alt="小可愛">
        <div class="section-box">

            <ul class="entries">

                <li class="entry">08.29 ~ 09.02 登記參選</li>
                <li class="entry">10.21 號次抽籤</li>
                <li class="entry">11.11 ~ 11.25 政見發表會</li>
                <li class="entry">11.25 公告選舉人數</li>
                <li class="entry">11.26 投票日</li>

            </ul>

        </div>
    </div>
</template>
<script src="https://code.jquery.com/jquery-3.6.1.min.js"
integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script>

$(document).ready(function () {
    var fadetime = 1000;
    var delaytime = 1000;
    function carousel() {
        $('.entry:first-child').fadeIn(fadetime).delay(delaytime).queue(
            function () {
            $(this).fadeOut(fadetime).appendTo('.entries').dequeue();
        });
    }
    carousel();
    setInterval(function () { carousel() }, fadetime + delaytime);
});
export default {
    data() {
        return {
            title: '重要日程',
            list: [
                {
                    date: '08.29 ~ 09.02登記參選',
                    project: '登記參選',
                },
                {
                    date: '10.21號次抽籤',
                    project: '號次抽籤',
                },
                {
                    date: '11.11 ~ 11.25',
                    project: '政見發表會',
                },
                {
                    date: '11.25',
                    project: '公告選舉人數',
                },
                {
                    date: '11.26',
                    project: '投票日',
                },

            ],
        }
    },
    methods: {
        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href + '?utm_source=3qpage&utm_medium=copybutton'
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('複製成功!')
        },
    },
}
</script>

<style scoped>
@media screen and (min-width: 600px) {
    .section-box {
        display: none;
    }

    .img {
        display: none;
    }
}


.section-box {

    padding: 1rem;
    text-align: center;
    background-color: rgb(255, 255, 255);
    background: rgb(255, 255, 255);
    background-image:
        linear-gradient(rgba(203, 232, 245, 0.3) 1px, transparent 0),
        linear-gradient(90deg, rgba(203, 232, 245, 0.3) 1px, transparent 0),
        linear-gradient(rgba(203, 232, 245, 0.3)1px, transparent 0),
        linear-gradient(90deg, rgba(203, 232, 245, 0.3) 1px, transparent 0);
    background-size:

        20px 20px;



    height: 80px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: auto 2rem;
    margin-top: 5rem;
}


img {

    margin: auto;
    text-align: center;
    width: 130px;
    display: flex;
    margin-bottom: -6rem;
    margin-top: 3rem;

}




.entries {
    padding: 1rem;
    margin: auto;
    font-size: 1.2rem;
    font-weight: 600;

}

li {
    font-size: 1.2rem;
}

.entries .entry {

    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
    text-align: center;

}
</style>
