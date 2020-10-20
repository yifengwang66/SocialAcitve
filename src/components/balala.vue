<template>
    <div class="balala">
        <canvas id="balala" @mousemove="handleMousemove($event)"></canvas>
    </div>
</template>

<script>
import Circle from '../assets/Circle';

export default {
    data(){
        return {
            circleArr: [],
            context: {},
        }
    },
    mounted() {
        const balala = document.getElementsByClassName('balala')[0];
        this.canvas = document.getElementById('balala');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = balala.offsetWidth;
        this.canvas.height = balala.offsetHeight;
        this.render();
    },
    methods: {
        handleMousemove(e) {
            const circle = new Circle(e.clientX, e.clientY);
            this.circleArr.push(circle);
            circle.draw(this.context);
        },
        render() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.circleArr = this.circleArr.filter((circle) => {
                return circle.a > 0.1;
            })
            this.circleArr.forEach(circle => {
                circle.draw(this.context);
            });
            requestAnimationFrame(this.render);
        }
    }
}
// globalCompositeOperation = 'lighter';
// context.globalAlpha;
</script>

<style scoped>
.balala{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>
