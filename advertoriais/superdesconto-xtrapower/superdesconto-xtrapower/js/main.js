let result = '';
let valorAntigo = [];
const n = document.getElementsByClassName('n');
let pos = n.length;

function Amount() {
    for (let e = 0; e < pos; e++) {
        const divId = n[e].id;
        const divInteration = document.getElementById(divId);
        n[e].innerText = getRandomInt(300, 400);
        valorAntigo[e] = n[e].innerText;
        setInterval(function () {
            if (valorAntigo[e] >= 30) {
                result = valorAntigo[e] - getRandomInt(5, 30);
                valorAntigo[e] = result;
                divInteration.innerText = result;
            }
        }, getRandomInt(5, 12) + '000')
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



Amount()