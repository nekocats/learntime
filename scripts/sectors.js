let sectors = ['quarter', 'half', 'three-quarters', 'full']
var sector = sectors[Math.floor(Math.random() * sectors.length)];
var level = 1;


const sector1 = document.getElementById('sector-1');
const sector2 = document.getElementById('sector-2');
const sector3 = document.getElementById('sector-3');
const sector4 = document.getElementById('sector-4');

const minutePointer = document.getElementById('minute-pointer');
const minutePointerText = document.getElementById('minute-pointer-txt');

sectorDraw();

function sectorDraw() {
    switch (sector) {
        case 'quarter':
            sector2.style.backgroundColor = "rgb(208, 255, 247)";
            sector4.style.backgroundColor = "transparent";
            sector3.style.backgroundColor = "transparent";
            sector1.style.backgroundColor = "transparent";
            minutePointer.style.transform = "rotate(180deg)";
            minutePointerText.style.rotate = "180deg";
            break;
        case 'half':
            sector2.style.backgroundColor = "rgb(208, 255, 247)";
            sector4.style.backgroundColor = "rgb(208, 255, 247)";
            sector3.style.backgroundColor = "transparent";
            sector1.style.backgroundColor = "transparent";
            minutePointer.style.transform = "rotate(270deg)";
            minutePointerText.style.rotate = "0deg";
            break;
        case 'three-quarters':
            sector2.style.backgroundColor = "rgb(208, 255, 247)";
            sector3.style.backgroundColor = "rgb(208, 255, 247)";
            sector4.style.backgroundColor = "rgb(208, 255, 247)";
            sector1.style.backgroundColor = "transparent";
            minutePointer.style.transform = "rotate(0deg)";
            minutePointerText.style.rotate = "0deg";
            break;
        case 'full':
            sector2.style.backgroundColor = "rgb(208, 255, 247)";
            sector4.style.backgroundColor = "rgb(208, 255, 247)";
            sector3.style.backgroundColor = "rgb(208, 255, 247)";
            sector1.style.backgroundColor = "rgb(208, 255, 247)";
            minutePointer.style.transform = "rotate(90deg)";
            minutePointerText.style.rotate = "180deg";
            break;
    }
}

let quarterButton = document.getElementById("quarter-button");
let halfButton = document.getElementById("half-button");
let threeQuarterButton = document.getElementById("three-quarters-button");
let fullButton = document.getElementById("full-button");
let answerDiv = document.getElementById("answer");

function correctAnswer() {
    answerDiv.innerHTML = "Tubli töö!"
    level++;
    sector = sectors[Math.floor(Math.random() * sectors.length)];
    sectorDraw();
    setTimeout(function() {
        answerDiv.innerHTML = "";
    }, 2000);
}

function wrongAnswer() {
    answerDiv.innerHTML = "Vale vastus."
    setTimeout(function() {
        answerDiv.innerHTML = "";
    }, 2000);
}

quarterButton.addEventListener("click", function(event) {
    if (sector == 'quarter') {
        correctAnswer();
    } else {
        wrongAnswer();
    }
});

halfButton.addEventListener("click", function(event) {
    if (sector == 'half') {
        correctAnswer();
    } else {
        wrongAnswer();
    }
});

threeQuarterButton.addEventListener("click", function(event) {
    if (sector == 'three-quarters') {
        correctAnswer();
    } else {
        wrongAnswer();
    }
});

fullButton.addEventListener("click", function(event) {
    if (sector == 'full') {
        correctAnswer();
    } else {
        wrongAnswer();
    }
});

setInterval(function() {
    if (level >= 10) {
        congratsContainer = document.getElementById("congrats-container");
        clockContainer = document.getElementById("clock");
        buttonsContainer = document.getElementById("buttons")
        congratsContainer.style.display = "block";
        clockContainer.style.display = "none";
        buttonsContainer.style.display = "none";
        setTimeout(function() {
            document.location = '/index2.html';
        }, 5000);
    }
}, 10);