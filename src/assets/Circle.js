function getRandom(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        this.a = 1;
    }
    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.globalCompositeOperation = 'lighter';
        context.globalAlpha = this.a;
        context.arc(this.x, this.y, 10, 0, Math.PI * 2);
        context.fill();
        this.update();
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.a *= 0.96;
    }
} 