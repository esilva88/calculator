window.onload = function () {
    resultado = document.getElementById("resultado");
    
}
x = "0";
xi = 1;
coma = 0;
opi = "no"; //operacion en curso
ni = 0; //numero en espera

function number(xx) {
    if (x == "0" || xi == 1) {
        resultado.innerHTML = xx;
        x = xx;
    } else {
        resultado.innerHTML += xx;
        x += xx;
    }
    xi = 0;
}

function operation(s) {
    igualdad()
    ni = x
    opi = s;
    xi = 1;
}

function igualdad() {
    if (opi == "no") {
        resultado.innerHTML = x;
    } else {
        cadena = ni + opi + x;
        solucion = eval(cadena);
        resultado.innerHTML = solucion;
        x = solucion;
        opi = "no";
        xi = 1;
        console.log(solucion);
    }
}
