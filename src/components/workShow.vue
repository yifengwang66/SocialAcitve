<template>
  <div>
    <div class="workShow">
      <transition-group v-if="datas.length !== 0" tag='ul'>
        <li
          v-for="(data, index) in datas"
          :key="Math.random()*10000*index"
          v-show="index === showIndex"
        >
          <fadetext v-if="typeof data[0] == 'string'" :textArr="data" />
          <photo
            v-if="Object.prototype.toString.call(data[0]) == '[object Object]'"
            :photos="data"
          />
        </li>
      </transition-group>
    </div>
    <div class="prev" @click="changeIndex(showIndex - 1)" v-show="showIndex !== 0">
      <span class="iconfont">&#xe603;</span>
    </div>
    <div class="next" @click="changeIndex(showIndex + 1)" v-show="showIndex !== datas.length - 1">
      <span class="iconfont">&#xe73a;</span>
    </div>
  </div>
</template>

<script>
import fadetext from "./fadeText";
import photo from "./photo";

export default {
  data() {
    return {
      showIndex: 0,
      datas: [],
      partOne: [
        "70年风雨兼程",
        "70年砥砺前行",
        "伴随着15个方阵的飒飒英姿",
        "中国奏响了盛世的华章",
      ],
      partTwo: [
        "大漠戈壁",
        "热血黄沙",
        "无数个航天人呕心沥血",
        "终成一朝中华航天梦圆",
      ],
      partThree: [
        "志愿者",
        "平凡人不平凡的美丽",
        "善良与真诚",
        "责任与奉献",
        "他们是盛世之下闪耀的星火",
      ],
      partFour: [
        "把伤痛化为勋章",
        "在汗水中搏击",
        "奥运健儿们",
        "用他们的青春与汗水",
        "重新书写中国体育",
      ],
      timer: null,
    };
  },
  components: {
    fadetext,
    photo,
  },
  mounted() {
    this.$axios
      .all([
        this.$axios.get("/gq"),
        this.$axios.get("/ht"),
        this.$axios.get("/zy"),
        this.$axios.get("/sport"),
      ])
      .then(
        this.$axios.spread((gqResp, htResp, zyResp, sportResp) => {
          this.datas.push(this.partOne);
          this.datas.push(gqResp);
          this.datas.push(this.partTwo);
          this.datas.push(htResp);
          this.datas.push(this.partThree);
          this.datas.push(zyResp);
          this.datas.push(this.partFour);
          this.datas.push(sportResp);
        })
      );
    this.timer = setInterval(() => {
      this.showIndex = (this.showIndex + 1) % this.datas.length;
    }, 10000);
  },
  methods: {
    changeIndex(newIndex) {
      clearInterval(this.timer);
      this.showIndex = newIndex % this.datas.length;
      this.timer = setInterval(() => {
        this.showIndex = (this.showIndex + 1) % this.datas.length;
      }, 10000);
    },
  },
};
</script>

<style scoped>
.workShow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  z-index: -1;
}
.workShow ul {
  position: absolute;
  width: 100%;
  height: 100%;
}
.workShow ul li{
  position: absolute;
  width: 100%;
  height: 100%;
  /* opacity: 0; */
  transition: all 1s;
}
.workShow ul li.active {
  opacity: 1;
  z-index: 1;
}
.prev,
.next {
  position: absolute;
  left: 50%;
  height: 50px;
  width: 50px;
  text-align: center;
  transform: translateX(-50%) translateY(0);
  cursor: pointer;
  z-index: 10;
  line-height: 50px;
}
.prev .iconfont,
.next .iconfont {
  font-size: 30px;
  color: rgba(255, 255, 255, 0.8);
}
.prev {
  top: 100px;
  animation: arrowMove 0.5s alternate-reverse infinite;
}
.next {
  bottom: 0;
  animation: arrowMove 0.5s infinite alternate;
}
@keyframes arrowMove {
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, -30px);
  }
}
.workShow .v-enter{
    opacity: 0;
}
.workShow .v-enter-active{
    transition: all 1s;
}
.workShow .v-enter-to{
    opacity: 1;
}
.workShow .v-leave{
    opacity: 1;
}
.workShow .v-leave-active{
    transition: all .5s;
}
.workShow .v-leave-to{
    opacity: 0;
}
</style>