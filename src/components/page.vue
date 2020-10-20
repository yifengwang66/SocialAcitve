<template>
  <div class="paging">
    <div class="wrapper">
      <button class="first" @click="changePage(1)" :class="{disabled: curPage === 1}">首页</button>
      <button
        class="prev iconfont"
        @click="changePage(curPage - 1)"
        :class="{disabled: curPage === 1}"
      >
        &#xe620;
        <span>上一页</span>
      </button>
      <button
        v-for="page in numArr"
        :key="page"
        :class="{active: page === curPage}"
        @click="changePage(page)"
      >{{ page }}</button>
      <button
        class="next iconfont"
        @click="changePage(curPage + 1)"
        :class="{disabled: curPage === pageSum}"
      >
        <span>下一页</span>&#xe622;
      </button>
      <button class="last" @click="changePage(pageSum)" :class="{disabled: curPage === pageSum}">尾页</button>
      <span class="CAS">{{ curPage }} \ {{ pageSum }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curPage: 1,
      numArr: []
    };
  },
  props: {
    // 有几个页数按钮
    pageNum: {
      type: Number,
      default: 5
    },
    //总页数
    pageSum: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.getNumArr();
  },
  methods: {
    getNumArr() {
        this.numArr = [];
      let min = this.curPage - Math.floor(this.pageNum / 2);
      if (min <= 0) {
        min = 1;
      }
      let max = min + this.pageNum - 1;
      if (max > this.pageSum) {
        max = this.pageSum;
      }
      for (let i = min; i <= max; i++) {
        this.numArr.push(i);
      }
    },
    changePage(newPage) {
      if (newPage <= 0 || newPage > this.pageSum) {
        return;
      }
      this.curPage = newPage;
      this.getNumArr();
      this.$emit("change-page", this.curPage);
    }
  }
};
</script>

<style scoped>
.paging {
  display: flex;
  margin: 20px;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.paging .wrapper {
  display: flex;
  width: 70%;
  justify-content: space-evenly;
  align-items: center;
}
.paging .iconfont {
  color: #000;
}
.paging button {
  display: inline-block;
  text-align: center;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #999999;
  background: transparent;
  cursor: pointer;
  outline: none;
}
.paging button.disabled {
  color: #999999;
  cursor: not-allowed;
}
.paging button.active,
.paging button:hover:not(.disabled) {
  background: tomato;
  color: #fff;
}
.paging .CAS {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
}
</style>