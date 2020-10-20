<template>
    <div class="book">
        <div class="img" @click="detail?'':toDetail()">
            <img :src="book.imgUrl">
        </div>
        <div class="info">
            <p class="name">
                <span class="type">读物</span>
                <span class="title" @click="detail?'':toDetail()">{{ book.name }}</span>
                <span class="writer">{{ book.writer }}</span>
            </p>
            <div class="desc">
                <em>简介：</em>
                {{ brefDesc }}
                {{ descShowDetail ? "" : "..." }}
                <span class="more" v-if="!detail" @click="detail?'':toDetail()">详情></span>
                <span class="more" v-if="detail" @click="descShowDetail = !descShowDetail">
                    {{descShowDetail?"收起":"详情"}}
                    <span class="iconfont">{{ descShowDetail?"&#xe603;":"&#xe73a;" }}</span>
                </span>
            </div>
            <div class="comment">
                <em>经典书评：</em>
                {{ brefCom }}
                {{ comShowDetail ? "" : "..." }}
                <span class="more" v-if="!detail" @click="detail?'':toDetail()">详情></span>
                <span class="more" v-if="detail" @click="comShowDetail = !comShowDetail">
                    {{comShowDetail?"收起":"详情"}}
                    <span class="iconfont">{{ comShowDetail?"&#xe603;":"&#xe73a;" }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            descShowDetail: false,
            comShowDetail: false,
        }
    },
    props: {
        book: {
            type: Object,
            required: true
        },
        detail: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        getRandom(min, max) {
            const num = Math.floor(Math.random() * (max - min)) + min;
            return num;
        },
        toDetail() {
            this.$emit('to-detail');
        },
        getNum(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    },
    computed: {
        brefDesc() {
            if(this.descShowDetail) {
                return this.book.desc;
            }
            return this.book.desc.slice(0, this.getNum(130, 140));
        },
        brefCom() {
            if(this.comShowDetail) {
                return this.book.comment;
            }
            return this.book.comment.slice(0, this.getNum(80, 90));
        }
    }
}
</script>

<style scoped>
.book {
    margin-bottom: 30px;
    display: flex;
}
.book .img{
    width: 180px;
    overflow: hidden;
    margin-right: 20px;
    flex-shrink: 0;
    box-shadow: 0 0 2px 0 #999999;
}
.book .img img{
    width: 180px;
    transition: all .3s;
}
.book .img img:hover{
    transform: scale(1.1);
}
.book .info{
    flex-grow: 1;
}
.book .info p.name{
    margin: 10px 0;
    vertical-align: middle;
}
.book .info .name .type{
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
.book .info .name .title{
    color: #f60;
    display: inline-block;
    margin-right: 10px;
}
.book .info .name .writer{
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #999999;
}
.book .info .desc em,
.book .info .comment em{
    color: #999999;
    font-size: 12px;
}
.book .info .desc,
.book .info .comment{
    margin: 15px 0;
    font-size: 14px;
    position: relative;
}
.book .more {
    cursor: pointer;
    font-size: 12px;
    color: #464141;
    position: absolute;
    background: #fff;
    bottom: 0;
    right: 0;
}
.book .info .desc .more .iconfont,
.book .info .comment .more .iconfont{
    color: #464141;
}
.book .info .desc .more:hover,
.book .info .desc .more:hover .iconfont,
.book .info .comment .more:hover,
.book .info .comment .more:hover .iconfont{
    color: #f60;
}
</style>