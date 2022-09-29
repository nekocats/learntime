let sectors = ['quarter', 'half', 'three-quarters', 'full']
var sector = sectors[Math.floor(Math.random() * sectors.length)];
var level = 1;


const sector1 = document.getElementById('sector-1');
const sector2 = document.getElementById('sector-2');
const sector3 = document.getElementById('sector-3');
const sector4 = document.getElementById('sector-4');

sectorDraw();

function sectorDraw() {
    switch (sector) {
        case 'quarter':
            sector2.style.backgroundColor = "rebeccapurple";
            sector4.style.backgroundColor = "transparent";
            sector3.style.backgroundColor = "transparent";
            sector1.style.backgroundColor = "transparent";
            break;
        case 'half':
            sector2.style.backgroundColor = "rebeccapurple";
            sector4.style.backgroundColor = "rebeccapurple";
            sector3.style.backgroundColor = "transparent";
            sector1.style.backgroundColor = "transparent";
            break;
        case 'three-quarters':
            sector2.style.backgroundColor = "rebeccapurple";
            sector4.style.backgroundColor = "rebeccapurple";
            sector3.style.backgroundColor = "rebeccapurple";
            sector1.style.backgroundColor = "transparent";
            break;
        case 'full':
            sector2.style.backgroundColor = "rebeccapurple";
            sector4.style.backgroundColor = "rebeccapurple";
            sector3.style.backgroundColor = "rebeccapurple";
            sector1.style.backgroundColor = "rebeccapurple";
            break;
    }
}

let quarterButton = document.getElementById("quarter-button");
let halfButton = document.getElementById("half-button");
let threeQuarterButton = document.getElementById("three-quarters-button");
let fullButton = document.getElementById("full-button");

quarterButton.addEventListener("click", function(event) {
    if (sector == 'quarter') {
        alert("Tubli!");
        level++;
        sector = sectors[Math.floor(Math.random() * sectors.length)];
        sectorDraw();
    } else {
        alert("Vale vastus.")
    }
});

halfButton.addEventListener("click", function(event) {
    if (sector == 'half') {
        alert("Tubli!");
        level++;
        sector = sectors[Math.floor(Math.random() * sectors.length)];
        sectorDraw();
    } else {
        alert("Vale vastus.")
    }
});

threeQuarterButton.addEventListener("click", function(event) {
    if (sector == 'three-quarters') {
        alert("Tubli!");
        level++;
        sector = sectors[Math.floor(Math.random() * sectors.length)];
        sectorDraw();
    } else {
        alert("Vale vastus.")
    }
});

fullButton.addEventListener("click", function(event) {
    if (sector == 'full') {
        alert("Tubli!");
        level++;
        sector = sectors[Math.floor(Math.random() * sectors.length)];
        sectorDraw();
    } else {
        alert("Vale vastus.")
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

    }
}, 10);

// function pol2car(angle, radius) {
//     return {
//         x: Math.cos((angle - 90) * (Math.PI / 180)) * radius,
//         y: Math.sin((angle - 90) * (Math.PI / 180)) * radius,
//     };
// }


// if (sector == 'quarter') {
//     quarterClock.style.display = "block";
// }//