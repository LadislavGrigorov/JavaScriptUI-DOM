window.onload = function () {
    var theCanvas = document.getElementById("the-canvas");
    var ctx = theCanvas.getContext("2d");

    function drawBike() {
        ctx.strokeStyle = ('rgb(46, 121, 140)');
        ctx.fillStyle = ('rgb(144, 202, 215)');
        ctx.lineWidth = 3;
        //seat
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.lineTo(250, 200);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(400, 300, 50, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(150, 300, 50, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(225, 200);
        ctx.lineTo(280, 300);
        ctx.stroke();

        //circle
        ctx.beginPath();
        ctx.arc(280, 300, 17, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(280, 300);
        ctx.lineTo(150, 300);
        ctx.lineTo(235, 220);
        ctx.lineTo(380, 220);
        ctx.lineTo(280, 300);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(380, 190);
        ctx.lineTo(400, 300);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(380, 190);
        ctx.lineTo(330, 205);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(380, 190);
        ctx.lineTo(420, 160);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(280 + 17 * Math.cos(230 * Math.PI / 180), 300 + 17 * Math.sin(230 * Math.PI / 180));
        ctx.lineTo(280 + 35 * Math.cos(230 * Math.PI / 180), 300 + 35 * Math.sin(230 * Math.PI / 180));
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(280 + 17 * Math.cos(50 * Math.PI / 180), 300 + 17 * Math.sin(50 * Math.PI / 180));
        ctx.lineTo(280 + 34 * Math.cos(50 * Math.PI / 180), 300 + 34 * Math.sin(50 * Math.PI / 180));
        ctx.stroke();
    }

    function drawFace() {
        ctx.strokeStyle = ('#22545F');
        ctx.fillStyle = ('rgb(144, 202, 215)');
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.arc(600, 280, 70, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.save();
        ctx.scale(1.7, 1);
        ctx.arc(330, 250, 7, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(360, 250, 7, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = ('#22545F');
        ctx.beginPath();
        ctx.save();
        ctx.scale(1, 1.7);
        ctx.arc(558, 147, 4, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(609, 147, 4, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.moveTo(588, 250);
        ctx.lineTo(580, 290);
        ctx.lineTo(590, 290);
        ctx.stroke();

        ctx.beginPath();
        ctx.save();
        ctx.rotate(10 * Math.PI / 180);
        ctx.scale(2, 0.5);
        ctx.arc(315, 410, 15, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.stroke();
        ctx.restore();

        ctx.strokeStyle = ('#000000');
        ctx.fillStyle = ('#396693');
        ctx.beginPath();
        ctx.save();
        ctx.scale(2, 0.5);
        ctx.arc(300, 440, 40, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.restore();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(565, 204);
        ctx.lineTo(565, 110);
        ctx.lineTo(635, 110);
        ctx.lineTo(635, 204);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.save();
        ctx.scale(2, 0.5);
        ctx.arc(300, 407, 17, 0 * Math.PI / 180, 180 * Math.PI / 180);
        ctx.restore();
        ctx.stroke();

        ctx.beginPath();
        ctx.save();
        ctx.scale(2, 0.5);
        ctx.arc(300, 219, 17, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.restore();
        ctx.fill();
        ctx.stroke();

    }

    function drawHouse() {
        ctx.strokeStyle = ('#000000');
        ctx.fillStyle = ('#975B5B');
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(800, 550);
        ctx.lineTo(800, 300);
        ctx.lineTo(1050, 300);
        ctx.lineTo(1050, 550);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(800, 300);
        ctx.lineTo(925, 150);
        ctx.lineTo(1050, 300);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(960, 260);
        ctx.lineTo(960, 140);
        ctx.lineTo(1000, 140);
        ctx.lineTo(1000, 260);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.save();
        ctx.scale(2, 0.5);
        ctx.arc(490, 280, 10, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.restore();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = ('#000000');
        ctx.beginPath();
        ctx.fillRect(810, 330, 40, 30);
        ctx.fillRect(852, 330, 40, 30);
        ctx.fillRect(810, 362, 40, 30);
        ctx.fillRect(852, 362, 40, 30);

        ctx.fillRect(958, 330, 40, 30);
        ctx.fillRect(1000, 330, 40, 30);
        ctx.fillRect(958, 362, 40, 30);
        ctx.fillRect(1000, 362, 40, 30);

        ctx.fillRect(958, 430, 40, 30);
        ctx.fillRect(1000, 430, 40, 30);
        ctx.fillRect(958, 462, 40, 30);
        ctx.fillRect(1000, 462, 40, 30);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(820, 550);
        ctx.lineTo(820, 450);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(900, 550);
        ctx.lineTo(900, 450);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(860, 550);
        ctx.lineTo(860, 430);
        ctx.stroke();

        ctx.beginPath();
        ctx.save();
        ctx.scale(2, 1);
        ctx.arc(430, 450, 20, 180 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.restore();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(850, 490, 5, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(870, 490, 5, 0 * Math.PI / 180, 360 * Math.PI / 180);
        ctx.stroke();
    }

    drawBike();
    drawFace();
    drawHouse();
};