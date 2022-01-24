function saluto() {
    console.log("Ciao Mondo");
}

function quadrato(numero) {
    if (isNaN(numero)) {
        console.error("Il parametro non è un numero");
        return 0;
    }

    return numero * numero;
}

saluto();

let numero = "5";

console.log(quadrato(numero));