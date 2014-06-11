var paper = Raphael(0, 0, 600, 600),
	pathOfSpiral,
	spiral;

//found the realization with canvas from here http://stackoverflow.com/questions/6824391/drawing-a-spiral-on-an-html-canvas-using-javascript
    function findPath(spiralCenterX, spiralCenterY, a, b) {
        var pathOfSpiral = "M" + spiralCenterX + ' ' + spiralCenterY,
			angle,
			x,
			y;

        for (var i = 0; i < 720; i++) {
			angle = 0.1 * i;
			x = (a + b * angle) * Math.cos(angle) + spiralCenterX;        
			y = (a + b * angle) * Math.sin(angle) + spiralCenterY;

            pathOfSpiral+= 'L ' + x + ' ' + y;
		}
		
		return pathOfSpiral;
    }

pathOfSpiral = findPath(300, 300, 4, 4);
spiral = paper.path(pathOfSpiral);