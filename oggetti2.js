const nemico = {
    _puntiFerita: 20,
    _puntiFeritaMassimi: 50,

    nome: "Goblin",
    forza: 12,
    danno: {
        minimo: 1,
        massimo: 6
    },

    calcolaDanno: function() {
        return Math.floor(Math.random() * this.danno.massimo - this.danno.minimo) + 
            this.danno.minimo + Math.floor(this.forza / 2);
    },

    stampaPuntiFerita: () => console.log(this.puntiFerita),

    get morto() {
        return this._puntiFerita <= 0;
    },

    get puntiFerita() {
        return this._puntiFerita;
    },

    set puntiFerita(value) {
        // Il valore di punti ferita sarà compreso tra 0 e _puntiFeritaMassimi
        this._puntiFerita = Math.max(0, Math.min(value, this._puntiFeritaMassimi));
    },

    getPuntiFerita() {

    },

    setPuntiFerita(valore) {

    }
};

nemico.puntiFerita += 10;

nemico.setPuntiFerita(nemico.getPuntiFerita() + 10);

console.log(nemico);