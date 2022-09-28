let sectors = ['quarter','half','three-quarters','full']
let sector = sectors[Math.floor(Math.random()*sectors.length)];



var dt = new Date();
document.getElementById('date-time').innerHTML = dt;

const sector1 = document.getElementById('sector-1');
const sector2 = document.getElementById('sector-2');
const sector3 = document.getElementById('sector-3');
const sector4 = document.getElementById('sector-4');

switch ( sector ) {
    case 'quarter':
        sector2.style.backgroundColor = "rebeccapurple";
        break;
    case 'half':
        sector2.style.backgroundColor = "rebeccapurple";
        sector4.style.backgroundColor = "rebeccapurple";
        break;
    case 'three-quarters':
        sector2.style.backgroundColor = "rebeccapurple";
        sector4.style.backgroundColor = "rebeccapurple";
        sector3.style.backgroundColor = "rebeccapurple";
        break;
    case 'full':
        sector2.style.backgroundColor = "rebeccapurple";
        sector4.style.backgroundColor = "rebeccapurple";
        sector3.style.backgroundColor = "rebeccapurple";
        sector1.style.backgroundColor = "rebeccapurple";
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