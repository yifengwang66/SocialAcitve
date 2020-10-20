<template>
  <div class="banner" :style="divStyle">
    <ul :style="ulStyle" @transitionend="handleTransitionend">
      <li
        v-for="(item, index) in options.items"
        :key="item.id"
        :style="liStyle"
        :class="{active: options.fade && index === spotIndex}"
      >
        <a :href="item.to" target="blank">
          <img :src="item.imgUrl" />
        </a>
        <a :href="item.to" target="blank" class="desc" :title="item.desc">{{ item.desc }}</a>
      </li>
    </ul>
    <ul class="spot" :style="spotStyle">
      <li
        v-for="(spot, index) in options.items.length - 1"
        :key="spot*1000"
        :class="{active: index === spotIndex}"
        @click="handleSpotClick(index)"
      ></li>
    </ul>
    <div class="mask"></div>
  </div>
</template>

<script>
/*
options:{
    items:[{imgUrl:, desc:,to:,id:,}],
    width: ,
    height: ,
    autoMove: ,
    fade: ,
}
*/

export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      left: 0,
      spotIndex: 0,
      isTransition: false,
      divStyle: {
        width: this.options.width + "px",
        height: this.options.height + "px"
      },
      ulStyle: {
        transition: "all 0.3s",
        width: this.options.fade ? this.options.width + 'px' : this.options.width * this.options.items.length + "px",
        height: this.options.height + "px",
        top: 0,
        left: 0
      },
      liStyle: {
        width: this.options.width + "px",
        height: this.options.height + "px",
        position: this.options.fade ? "absolute" : "static",
        opacity: this.options.fade ? 0 : 1,
      },
      spotStyle: {
        width: 20 * (this.options.items.length - 1) + "px",
        height: 20 + "px"
      }
    };
  },
  
  mounted() {
    if (this.options.autoMove) {
      this.autoMove();
    }
  },

  methods: {
    autoMove() {
      if (!this.options.fade) {
        this.timeOut = setTimeout(() => {
          this.isTransition = true;
          if (this.spotIndex === 0) {
            this.$set(this.ulStyle, "transition", "all .3s");
            this.left = 0;
          }
          this.left -= this.options.width;
          this.$set(this.ulStyle, "left", this.left + "px");
          this.spotIndex++;
        }, this.options.time);
      } else {
        this.timeOut = setTimeout(() => {
            if(this.spotIndex === this.options.items.length - 2){
                this.spotIndex = -1;
            }
          this.isTransition = true;
          this.spotIndex++;
        }, this.options.time);
      }
    },
    handleTransitionend() {
      clearTimeout(this.timeOut);
      this.isTransition = false;
      if (!this.options.fade) {
        if (this.spotIndex >= this.options.items.length - 1) {
          this.$set(this.ulStyle, "transition", "none");
          this.$set(this.ulStyle, "left", 0);
          this.spotIndex = 0;
          this.left = 0;
        }
      }
      if (this.options.autoMove) {
        this.autoMove();
      }
    },
    handleSpotClick(index) {
      if (this.isTransition || this.ulStyle.transition === "none") return;
      clearTimeout(this.timeOut);
      this.spotIndex = index;
      if (!this.options.fade) {
        this.left = -this.spotIndex * this.options.width;
        this.$set(this.ulStyle, "left", this.left + "px");
      } else {
          this.spotIndex = index;
      }
    }
  }
};
</script>

<style scoped>
.banner {
  overflow: hidden;
  position: relative;
}
.banner ul {
  position: absolute;
}
.banner ul li {
  float: left;
  transition: all 0.3s;
}
.banner ul li:not(.active){
    z-index: -1;
}
.banner ul li.active {
  opacity: 1 !important;
}
.banner ul li img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
.banner ul li img:hover {
  transform: scale(1.2);
}
.banner ul li .desc {
  width: 150px;
  margin: 5px 10px 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  color: #fff;
  bottom: 5px;
  z-index: 9;
  font-size: 12px;
  cursor: pointer;
}
.banner ul li .desc:hover {
  color: #ff9724;
}
.banner .spot {
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 10px;
  right: 10px;
  z-index: 10;
}
.banner .spot li {
  height: 10px;
  width: 10px;
  background: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
}
.banner .spot li:hover {
  box-shadow: 0 0 5px 0 #f40;
  background: rgba(255, 68, 0, 0.8);
}
.banner .spot li.active {
  background: #f40;
}
.mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  z-index: 4;
}
</style>