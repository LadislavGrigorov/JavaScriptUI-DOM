var paper = Raphael(0, 0, 600, 800);

var points = 'M30 50 L50 30 90 70 70 90 50 70 90 30 110 50';
var telerikSign = paper.path(points);
telerikSign.attr({
	stroke: '#5CE600',
	'stroke-width': 7
});

var telerikText = paper.text(225, 70, 'Telerik');
telerikText.attr({
	'font-size': '70px',
	'font-weight': 'bold'
});

var telerikSubText = paper.text(265, 120, 'Develop experiences');
telerikSubText.attr({
	'font-size': '30px',
	'font-weight': 'thicker'
});

var telerikReservedMark = paper.circle(350, 60, 5);

var telerikReservedMarkText = paper.text(350, 60, 'R');
telerikReservedMarkText.attr({
	'font-size': '8px',
	'font-weight': 'bold'
});

var telerikBorder = paper.rect(2, 2, 430, 150);
telerikBorder.attr({
	stroke: '#E0FFA3',
	'stroke-width': 8
});

var youtubeYouText = paper.text(100, 250, 'You');
youtubeYouText.attr({
	'font-size': '70px',
	'font-weight': 'bold',
	fill: '#4B4B4B'
});

var youtubeBackground = paper.rect(180, 200, 200, 100, 15);
youtubeBackground.attr({
	fill: '#EC2828',
	stroke: 'none'
});

var youtubeYouText = paper.text(280, 250, 'Tube');
youtubeYouText.attr({
	'font-size': '70px',
	'font-weight': 'bold',
	fill: '#fff'
});