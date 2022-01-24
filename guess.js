const readline = require("readline");

function chiediNumero(numeroDaIndovinare) {
    let interface = readline.createInterface(process.stdin, process.stdout);

    interface.question("Qual è il numero? ", numero => {
        interface.close();
        if (numero == numeroDaIndovinare) {
            console.log("Hai indovinato!");
        } else if (numero < numeroDaIndovinare) {
            console.log("Il numero da indovinare è maggiore.");
            chiediNumero(numeroDaIndovinare);
        } else {
            console.log("Il numero da indovinare è minore.");
            chiediNumero(numeroDaIndovinare);
        }
    });
}

let numeroDaIndovinare = Math.floor(Math.random() * 100) + 1;

console.log("Indovina un numero da 1 a 100!\n\n");
chiediNumero(numeroDaIndovinare);
