$(document).ready(function dateNow() {
    //Obtém data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    let dia = data.getDate();           // 1-31
    let mes = data.getMonth() + 1;          // 0-11 (zero=janeiro)
    let ano = data.getFullYear();       // 4 dígitos

    //Se o número do dia for menor que 10, acrescenta 0 a sua frente
    if (dia < 10) {
        dia = "0" + dia;
    }

    //Se o número do dia for menor que 10, acrescenta 0 a sua frente
    if (mes < 10) {
        mes = "0" + mes;
    }

    //Seleciona elemento no HTML
    let dateSpan = $("#date");
    dateSpan[0].innerText = dia + "/" + mes + "/" + ano;
});