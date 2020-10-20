<template>
  <div class="photo" @mousedown="handleMousedown($event)" @mouseup="handleMouseup($event)">
    <div
      class="wrapper"
      :style="{transform:'translate(-50%, -50%) rotateX(' + wraprotateX + 'deg) rotateY(' + wraprotateY + 'deg)'}"
    >
      <img
        v-for="(photo, index) in photos"
        :key="photo.id"
        :src="photo.url"
        :style="{transform: `rotateY(${imgInfo[index]? imgInfo[index].r : 0}deg) translateZ(${imgInfo[index] ? 380 : 0}px)`, transitionDelay: `${imgInfo[index] ? imgInfo[index].delay : 0}s`}"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoTimer: null,
      pingTimer: null,
      wraprotateY: 0,
      wraprotateX: -10,
      lastX: null,
      lastY: null,
      nowX: null,
      nowY: null,
      disX: null,
      disY: null,
      photoDom: null,
      imgInfo: [],
    };
  },
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      setTimeout(() => {
        for (let i = 0; i < this.photos.length; i++) {
          this.imgInfo.push({
            r: (360 / this.photos.length) * i,
            delay: (this.photos.length - 1 - i) * 0.1,
          });
        }
        this.autoTimer = setInterval(() => {
          this.wraprotateY = (this.wraprotateY + 0.5) % 360;
        }, 30);
      }, 500);
    },
  },
};
</script>

<style scoped>
.photo {
  width: 100%;
  height: 100%;
  perspective: 800px;
  position: relative;
}
.photo .wrapper {
  width: 300px;
  height: 200px;
  position: absolute;
  transform-style: preserve-3d;
  top: 50%;
  left: 50%;
}
.photo .wrapper img {
  position: absolute;
  width: 100%;
  height: 100%;
  /* 处理层级问题 */
  background-color: #000;
  transition: transform 1s;
  transform: roatateZ(0deg) translateZ(0);
  -webkit-box-reflect: below 10px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
        50%, rgba(0, 0, 0, 0.8) 100%);
  user-select: none;
}
</style>