<template>
    <div class="listNav">
        <div class="title">
            <span>{{ list.title }}</span>
        </div>
        <ul class="content">
            <li v-for="item in list.items" :key="item.id">
                <a :href="item.url" target="blank" :title="item.title" :class="{hoverRed: list.hoverRed}">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>

/*
list:{
    title: "实事追踪",
    items: [{
        title: '',
        url: '',
        id: 
    }]
}
*/
export default {
    props:{
        list:{
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>
.listNav .title{
    border-bottom: 2px solid #831D4D;
    margin-bottom: 10px;
}
.listNav .title span{
    line-height: 30px;
    height: 30px;
    display: inline-block;
    padding: 5px 5px 0 5px;
    background: #831D4D;
    color: #ffffff;
    font-weight: bold;
}
.listNav .content li a{
    display: inline-block;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #393939;
    height: 23px;
    line-height: 23px;
    font-size: 14px;
}
.listNav .content li a:hover {
    color: rgb(255, 181, 44);
}
.listNav .content li a.hoverRed:hover{
    color: #e60012
}
</style>