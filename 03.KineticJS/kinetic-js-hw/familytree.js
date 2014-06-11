function familyTree(familyTreeInput) {
    var stage = new Kinetic.Stage({
            container: 'kinetic-container',
            width: 1920,
            height: 1080
        }),
        layer = new Kinetic.Layer(),
        persons = parsePersons(familyTreeInput),
        root = findRoot(persons),
        boxWidth = 130,
        boxHeight = 15,
        fontSize = 12,
        strokeColor = '#77B300',
        textColor = 'black',
        widthSpace = boxWidth + 20,
        heightSpace = boxHeight + 40;

    function Person(name) {
        this.name = name;
        this.children = [];
        this.hasOffspring = function () {
            if (this.children.length > 0) {
                return true;
            }
        };
        this.hasParents = function () {
            if (this.father || this.mother) {
                return true;
            }
        };
        this.isFemale = false;
    }

    function addNewPerson(name, persons) {
        for (var i = 0; i < persons.length; i++) {
            if (persons[i].name === name) {
                return persons[i];
            }
        }

        var newPerson = new Person(name);
        persons.push(newPerson);
        return newPerson;
    }

    function parsePersons(familyTreeInput) {
        var persons = [];

        for (var i = 0; i < familyTreeInput.length; i++) {
            var mother = addNewPerson(familyTreeInput[i].mother, persons);
            var father = addNewPerson(familyTreeInput[i].father, persons);
            mother.partner = father;
            mother.isFemale = true;
            father.partner = mother;

            for (var j = 0; j < familyTreeInput[i].children.length; j++) {
                var child = addNewPerson(familyTreeInput[i].children[j], persons);
                mother.children.push(child);
                father.children.push(child);
                child.father = father;
                child.mother = mother;
            }
        }

        return persons;
    }

    function findRoot(persons) {
        for (var i = 0; i < persons.length; i++) {
            if (!persons[i].hasParents() && !persons[i].partner.hasParents()) {
                return persons[i];
            }
        }
    }

    function findMinXCoordinate(persons) {
        var currentMin = Number.MAX_VALUE;
        for (var i = 0; i < persons.length; i++) {
            if (persons[i].x && persons[i].x < currentMin) {
                currentMin = persons[i].x;
            }
        }
        return currentMin;
    }

    var drawer = new Drawer(layer, boxWidth, boxHeight, fontSize, strokeColor, textColor);
    drawTree(root, drawer, 10, 10, true);
    layer.offsetX(findMinXCoordinate(persons));
    stage.add(layer);

    function drawTree(currentNode, drawer, startX, startY) {
        var x = startX;
        var y = startY;

        if (currentNode.partner) {
            drawer.drawPerson(currentNode.partner, x, y);
            x += widthSpace;
        }
        drawer.drawPerson(currentNode, x, y);

        x = startX;

        for (var i = 0; i < currentNode.children.length; i++) {
            if (i && currentNode.children[i - 1].partner) {
                x += widthSpace;
            }
            drawTree(currentNode.children[i], drawer, x - widthSpace, y + heightSpace);
            x += widthSpace;
        }
    }
}

function Drawer(layer, boxWidth, boxHeight, fontSize, strokeColor, textFillColor) {
    this.drawPerson = function (person, x, y) {
        function drawText() {
            return new Kinetic.Text({
                x: x,
                y: y,
                width: boxWidth,
                text: person.name,
                fontSize: fontSize,
                fill: textFillColor,
                align: 'center'
            });
        }

        function drawRect() {
            var radius = 2;
            if (person.isFemale) {
                radius = 7;
            }

            person.x = x;
            person.y = y;

            return new Kinetic.Rect({
                x: x,
                y: y,
                width: boxWidth,
                stroke: strokeColor,
                strokeWidth: 1,
                height: boxHeight,
                cornerRadius: radius
            });
        }

        function connectToParent(parent, layer) {
            layer.add(new Kinetic.Line({
                points: [x + boxWidth / 2, y,
                        parent.x + boxWidth / 2, parent.y + boxHeight],
                stroke: strokeColor,
                strokeWidth: 2,
            }));
        }

        function connectTopartner(person, layer) {
            layer.add(new Kinetic.Line({
                points: [x , y + (boxHeight / 2),
                        person.x + boxWidth, y + (boxHeight / 2)],
                stroke: strokeColor,
                strokeWidth: 2
            }));
        }

        if (person.hasParents()) {
            if (person.mother) {
                connectToParent((person.mother), layer);
            }
            if (person.father) {
                connectToParent((person.father), layer);
            }
        }

        if (person.partner) {
            connectTopartner(person.partner, layer);
        }

        layer.add(drawText());
        layer.add(drawRect());
    }
}

document.onload = function(){
    familyTree(familyMembersAlt);
}