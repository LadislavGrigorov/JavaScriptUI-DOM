window.onload = function () {
    var theCanvas = document.getElementById("the-canvas");
    var ctx = theCanvas.getContext("2d");
    var xCorrdinate = 20,
        yCoordinate = 20;

    function drawCircle(x, y) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.fillStyle = ('#fff');
        xCorrdinate += x;
        yCoordinate += y;
        ctx.moveTo(xCorrdinate, yCoordinate);
        ctx.arc(xCorrdinate, yCoordinate, 18, 0, 360 * Math.PI / 180);
        ctx.stroke();
        ctx.fill();
    }

    var direction = {
        x: 10,
        y: 10
    };

    function changeDirection(x, y) {
        if (x <= 20) {
            direction.x *=-1;
        }
        if (x >= ctx.canvas.width - 20) {
            direction.x *= -1;
        }
        if (y <= 20) {
            direction.y *= -1;
        }
        if (y >= ctx.canvas.height - 20) {
            direction.y *= -1;
        }
    }

    function animationFrame() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawCircle(direction.x, direction.y);
        changeDirection(xCorrdinate, yCoordinate);
        requestAnimationFrame(animationFrame);
    }

    requestAnimationFrame(animationFrame);
};