/// <reference path="kinetic-v5.1.0.js" />
window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'kinetic-container',
        width: 1300,
        height: 800
    });
    var layer = new Kinetic.Layer(),
        rect = new Kinetic.Rect({
            x: 20,
            y: 20,
            width: 50,
            height: 50,
            fill: '#000',
            stroke: '#bbb'
        });
    layer.add(rect);
    stage.add(layer);
}