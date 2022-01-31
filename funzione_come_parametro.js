function calcolaNumero(numero, funzione) {
    if (typeof numero !== "number") {
        console.error("Il parametro 'numero' deve essere un numero");
        
        return undefined;
    }

    return funzione(numero);
}

let num1 = calcolaNumero(3, n => n * n);
let num2 = calcolaNumero(5, n => n + 10);

let stringa = calcolaNumero("prova", s => s + "!");

console.log(num1);
console.log(num2);
console.log(stringa);