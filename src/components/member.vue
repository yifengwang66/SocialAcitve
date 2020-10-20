<template>
    <div class="member">
        <div class="imgWrapper">
            <img :src="member.img" >
        </div>
        
        <div class="info">
            <span>
                {{ member.name }}
                <i class="iconfont">&#xe621;</i>
                <span class="age">{{ member.age }}</span>
            </span>
            <p>{{ member.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        member: {
            type: Object,
            required: true
        },
    },
    mounted() {
        console.log(this.member)
    }
}
</script>

<style scoped>
.member{
    margin-bottom: 15px;
    display: flex;
}
.member .iconfont{
    color: rgb(15, 159, 255);
}
.member .imgWrapper{
    flex-shrink: 0;
    margin-right: 15px;
    width: 100px;
    height: 111px;
    overflow: hidden;
}
.member img{
    display: inline-block;
    width: 100px;
    transform: scale(1);
    transition: all .5s;
}
.member img:hover{
    transform: scale(1.2);
}
.member .info{
    margin: 10px 0;
}
.member .age{
    font-size: 15px;
    color: rgb(235, 209, 63)
}
.member p{
    font-style: italic;
    font-size: 15px;
}
</style>