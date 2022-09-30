let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let copiedHours = hours.slice();

function shuffle(arr) {
    for (var i = arr.length - 1; i >= 1; i -= 1) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

shuffle(copiedHours);

for (var i = 0; i <= 11; i++) {
    var tag = document.createElement("button");
    tag.setAttribute('id', "hour-button-" + copiedHours[i]);
    tag.setAttribute('draggable', "true");
    var text = document.createTextNode(copiedHours[i]);
    tag.appendChild(text);
    var element = document.getElementById("hour-buttons");
    element.appendChild(tag);
};

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

emptyHours = getMultipleRandom(hours, 3);

for (var i = 1; i <= 12; i++) {
    clockHours = document.getElementById("number-" + i);

    if (emptyHours.includes(i)) {
        clockHours.innerText = "";
    }
}

function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
}

function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
}