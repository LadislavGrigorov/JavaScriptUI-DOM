function selectDivs() {
    findAllByQuery();
    findAllByGetElement();

    function findAllByQuery() {
        var nestedDivs = document.querySelectorAll('div div');
        var outputMessage = '';

        outputMessage += nestedDivs.length + ' inner divs found by querySelectorAll function';
        printOutput(outputMessage)

        return nestedDivs;
    }

    function findAllByGetElement() {
        var allDivs = document.getElementsByTagName('div');
        var innerDivs = [];

        for (var i = 0, len = allDivs.length; i < len; i++) {
            if (allDivs[i].parentElement.tagName === 'DIV') {
                innerDivs.push(allDivs[i]);
            }
        }

        var outputMessage = '';
        outputMessage += innerDivs.length + ' inner divs found by getElementByTagName function';
        printOutput(outputMessage)

        return innerDivs;
    }
    
    function printOutput(message) {
        var output = document.getElementById('output');
        output.innerHTML += message + '<br />';
    }

}