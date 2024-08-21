function tabuar() {
    var inicial = parseInt(document.getElementById("inicial").value);
    var res = document.getElementById("res");
    var tabuando = '';

    if (isNaN(inicial)) {
        window.alert('Preencha com um numero zolhão!')
        return;
    }

    for (var d = 0; d <= 10; d++) {
        tabuando += "<option>" + inicial + " x " + d + " = " + inicial * d + "</option>";
    }
    document.getElementById("seltab").innerHTML = tabuando;
}