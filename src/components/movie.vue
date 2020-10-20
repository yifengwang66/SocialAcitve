<template>
    <div class="movie">
        <div class="img">
            <a @click="detail?'':toDetail()">
                <img :src="movie.imgUrl">
            </a>
        </div>
        <div class="info">
            <p class="name">
                <span class="type">电影</span>
                <a @click="detail?'':toDetail()">{{ movie.name }}</a>
                <span class="year">{{ movie.pushTime.slice(0, 4) }}</span>
                <span class="score">{{ movie.score }}</span>
            </p>
            <div class="bref">
                <div class="director"><em>导演：</em>{{ movie.director }}</div>
                <div class="actor">
                    <em>主演：</em>
                    <ul>
                        <li v-for="actor in movie.actors" :key="actor+getRandom()">{{ actor }}</li>
                    </ul>
                </div>
                <div class="region"><em>地区：</em>{{ movie.region }}</div>
                <div class="pushTime"><em>上映时间：</em>{{ movie.pushTime }}</div>
            </div>
            <div class="desc">
                <em>简介：</em>
                <!-- {{ movie.desc }} -->
                {{ brefDesc }}
                {{ showDetail?"" : "..." }}
                <span class="more" v-if="!detail" @click="detail?'':toDetail()">详情></span>
                <span class="more" v-if="detail" @click="showDetail = !showDetail">
                    {{showDetail?"收起":"详情"}}
                    <span class="iconfont">{{ showDetail?"&#xe603;":"&#xe73a;" }}</span>
                </span>
            </div>
            <a class="more iconfont" v-if="!detail" @click="detail?'':toDetail()">&#xe60a;  查看详情</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDetail: false
        }
    },
    props: {
        movie: {
            type: Object,
            required: true
        },
        detail: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        getRandom() {
            return Math.floor(Math.random() * 1000000);
        },
        getNum(min, max) {
            const num = Math.floor(Math.random() * (max - min)) + min;
            return num;
        },
        toDetail() {
            this.$emit("to-detail");
        } 
    },
    computed: {
        brefDesc() {
            if(this.showDetail) {
                return this.movie.desc;
            }
            return this.movie.desc.slice(0, this.getNum(80, 90));
        }
    }
}
</script>

<style scoped>
.movie {
    margin-bottom: 15px;
    display: flex;
}
.movie a{
    cursor: pointer;
}
.movie .img{
    width: 180px;
    overflow: hidden;
    margin-right: 20px;
    flex-shrink: 0;
}
.movie .img img{
    width: 180px;
    transition: all .3s;
}
.movie .img img:hover{
    transform: scale(1.1);
}
.movie .info{
    flex-grow: 1;
    position: relative;
}
.movie .info p.name{
    margin: 10px 0;
    vertical-align: middle;
}
.movie .info .name .type{
    display: inline-block;
    font-size: 12px;
    width: 38px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #666666;
    background: #f8f8f8;
    border: 1px solid #ececec;
    margin-right: 10px;
}
.movie .info .name a{
    color: #f60;
    display: inline-block;
    margin-right: 10px;
}
.movie .info .name .year{
    display: inline-block;
    font-size: 12px;
    width: 38px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #999999;
}
.movie .info .name .score{
    float: right;
    color: #f60;
    font-size: 20px;
}
.movie .info .bref{
    display: flex;
    flex-wrap: wrap;
}
.movie .info .bref div{
    width: 50%;
    margin-bottom: 5px;
    font-size: 14px;
}
.movie .info .bref div em,
.movie .info .desc em{
    color: #999999;
    font-size: 12px;
}
.movie .info .bref .actor ul{
    display: inline-block;
}
.movie .info .bref .actor li{
    display: inline-block;
}
.movie .info .bref .actor li:not(:nth-child(1))::before{
    content: "/";
    color: #999999;
    display: inline-block;
    margin: 0 5px;
}
.movie .info .desc{
    position: relative;
}
.movie .info .desc .more{
    cursor: pointer;
    font-size: 12px;
    position: absolute;
    background: #fff;
    bottom: 0;
    right: 0;
}
.movie .info .desc .more .iconfont{
    color: #464141;
}
.movie .info .desc .more:hover,
.movie .info .desc .more:hover .iconfont{
    color: #f60;
}
.movie .info>.more{
    text-align: center;
    position: absolute;
    bottom: 15px;
    height: 35px;
    line-height: 35px;
    width: 125px;
    outline: none;
    border-radius: 18px;
    color: #fff;
    border: none;
    background: #00be06;
    cursor: pointer;
    font-size: 16px;
}
.movie .info>.more:hover{
    background: #00c806;
}
</style>