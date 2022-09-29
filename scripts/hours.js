var dt = new Date();
document.getElementById('date-time').innerHTML = dt;

let hours = ['1','2','3','4','5','6','7','8','9','10','11','12'];
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
    var text = document.createTextNode(copiedHours[i]);
    tag.appendChild(text);
    var element = document.getElementById("hour-buttons");
    element.appendChild(tag);
};

