let nemico = {
    nome: "Goblin",
    puntiFerita: 10
}

function danneggiaNemico(nemico, quantita) {
    nemico.puntiFerita -= quantita;
}

function duplicaNumero(numero) {
    numero *= 2;
}

function aggiungiLettera(stringa, lettera) {
    stringa.contenuto += lettera;
}

let stringa = {
    contenuto: "prova"
}

console.log(stringa);
aggiungiLettera(stringa, "a");
console.log(stringa);