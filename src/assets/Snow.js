export default class Snow {
    constructor(x, y, scale, rotate, speedX, speedY, speedR) {
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.rotate = rotate;
        this.speedX = speedX;
        this.speedY = speedY;
        this.speedR = speedR;
    }

    render(context) {
        context.save();
        context.beginPath();
        context.translate(this.x, this.y);
        context.scale(this.scale, this.scale);
        context.rotate(this.rotate * Math.PI / 180);

        context.moveTo(-10, 0);
        context.lineTo(10, 0);
        context.strokeStyle = `#fff`;
        context.lineWidth = 5;
        context.lineCap = "round";
        context.stroke();


        const disX = 10 * Math.sin(30 * Math.PI / 180);
        const disY = 10 * Math.sin(60 * Math.PI / 180);

        context.moveTo(-disX, disY);
        context.lineTo(disX, -disY);
        context.stroke();

        context.moveTo(-disX, -disY);
        context.lineTo(disX, disY);

        context.stroke();
        context.restore();
    }
}