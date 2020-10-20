<template>
  <div class="comment">
    <div class="user">
      <span class="iconfont">&#xe604;</span>
      <span class="userName">{{ comment.userName }}</span>
    </div>
    <div class="content">
      <p
        v-for="para in comment.content"
        :key="getRandom() + para.slice(0, 1)"
      >{{ para }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  methods: {
    getRandom() {
      return Math.floor(Math.random() * 10000000000);
    }
  }
};
</script>

<style scoped>
.comment {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}
.comment .user {
  margin-right: 20px;
}
.comment .user .userName {
  display: inline-block;
  margin-left: 10px;
  color: #6d757a;
}
.comment .iconfont {
  color: rgba(244, 68, 68);
  font-size: 60px;
}
.comment .content {
  width: 80%;
}
</style>