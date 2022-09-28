let sectors = ['quarter','half','three-quarters','full']
let sector = sectors[Math.floor(Math.random()*sectors.length)];

var dt = new Date();
document.getElementById('date-time').innerHTML = dt;

const quarterClock = document.getElementById('quarter-clock');
const halfClock = document.getElementById('half-clock');
const threeQuarterClock = document.getElementById('three-quarter-clock');
const fullClock = document.getElementById('full-clock');

switch ( sector ) {
    case 'quarter':
        quarterClock.style.display = "block";
        break;
    case 'half':
        halfClock.style.display = "block";
        break;
    case 'three-quarters':
        threeQuarterClock.style.display = "block";
        break;
    case 'full':
        fullClock.style.display = "block";
        break;
}

// function pol2car(angle, radius) {
//     return {
//         x: Math.cos((angle - 90) * (Math.PI / 180)) * radius,
//         y: Math.sin((angle - 90) * (Math.PI / 180)) * radius,
//     };
// }


// if (sector == 'quarter') {
//     quarterClock.style.display = "block";
// }