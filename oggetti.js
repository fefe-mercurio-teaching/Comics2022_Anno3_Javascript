// In C#:
// 1) Può esistere una classe senza un oggetto (vera)
// 2) Può esistere un oggetto senza una classe
// In Javascript entrambe sono vere

function stampaNomeArma(arma) {
    console.log("Nome: " + arma.nome);
}

let spada = {
    costo: 100,
    nome: "Spada Lunga",
    peso: 3,
    danno: {
        minimo: 1,
        massimo: 8
    },

    calcolaDanno: function() {
        return Math.floor(Math.random() * (this.danno.massimo - this.danno.minimo)) + this.danno.minimo;
    }
}

let ascia = {
    costo: 120,
    peso: 10,
    danno: {
        minimo: 1,
        massimo: 10
    }
}

stampaNomeArma(ascia);
console.log("Danno: " + ascia.calcolaDanno());