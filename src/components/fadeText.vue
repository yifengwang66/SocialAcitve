<template>
    <div class="text">
        <p v-for="text in textArr" :key="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        textArr: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.text p{
    text-align: center;
    line-height: 40px;
    color: #fff;
    height: 40px;
    font-size: 30px;
}
</style>