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
	tag.setAttribute('ondragstart', "dragstart_handler(event);");
	tag.setAttribute('ondragend', "dragend_handler(event);");
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
		clockHours.setAttribute('ondrop', "drop_handler(event)");
		clockHours.setAttribute('ondragover', "dragover_handler(event)");
	}
}

function dragstart_handler(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	ev.effectAllowed = "move";
}

function dragover_handler(ev) {
	console.log("dragOver");
	ev.preventDefault();
}

function drop_handler(ev) {
	console.log("Drop");
	ev.preventDefault();
	var id = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(id));
  }

const draggableElement = document.querySelector('button[draggable="true"]');

draggableElement.addEventListener("dragenter", (event) => {
	event.preventDefault();
});

draggableElement.addEventListener("dragover", (event) => {
	event.preventDefault();
});

function onDrop(event) {
	const data = event.dataTransfer.getData("text/plain");
	event.target.textContent = data;
	event.preventDefault();
}

function dragend_handler(ev) {
	console.log("dragEnd");
	ev.dataTransfer.clearData();
}