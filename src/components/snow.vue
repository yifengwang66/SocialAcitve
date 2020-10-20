<template>
  <div class="snow">
    <canvas id="snow"></canvas>
  </div>
</template>

<script>
import Snow from "../assets/Snow";

export default {
  mounted() {
    const wrap = document.getElementsByClassName("snow")[0];
    const canvas = document.getElementById("snow");
    const context = canvas.getContext("2d");
    canvas.width = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    const snowArray = [];
    function init() {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const scale = Math.random() + 0.5;
        const rotate = Math.random() * 60;
        const speedX = Math.random() + 1;
        const speedY = Math.random() + 5;
        const speedR = Math.random() * 4 + 2;

        const snow = new Snow(x, 0, scale, rotate, speedX, speedY, speedR);
        setTimeout(function() {
          snow.render(context);
          snowArray.push(snow);
        }, Math.random() * 8000);
      }
      snowing();
    }
    init();
    function snowing() {
      setInterval(() => {
        if(snowArray.length === 0) {return}
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < snowArray.length; i++) {
          snowArray[i].x =
            (snowArray[i].x + snowArray[i].speedX) % canvas.width;
          snowArray[i].y =
            (snowArray[i].y + snowArray[i].speedY) % canvas.height;
          snowArray[i].rotate =
            (snowArray[i].rotate + snowArray[i].speedR) % 60;

          snowArray[i].render(context);
        }
      }, 30);
    }
  }
};
</script>

<style scoped>
.snow {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#snow {
  /* background: #000; */
  opacity: 0.2;
}
</style>