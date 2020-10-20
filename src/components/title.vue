<template>
  <div class="title">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }
};
</script>

<style scoped>
.title{
    width: 150px;
    border-bottom: 2px solid #e60012;
    margin-bottom: 15px;
}
.title span{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    background: #e60012;
    border-top-right-radius: 15px;
    color: #fff;
    padding: 5px 10px 0 10px;
}
</style>