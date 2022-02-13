// Creare una "classe" per gli oggetti dell'inventario di un RPG.
// Gli oggetti avranno le seguenti caratteristiche:
//
//  * Nome, costo, danno minimo e danno massimo
//  * Una funzione che restituisce il danno (numero casuale compreso tra
//    danno minimo e danno massimo)

function Item(name, cost, minDamage, maxDamage) {
    this.name = name;
    this.cost = cost;
    this.damage = {
        min: minDamage,
        max: maxDamage
    };
}

Item.prototype.getDamage = function() {
    return Math.floor(Math.random() * this.damage.max - this.damage.min) + this.damage.min + 1;
}

let spada = new Item("Spada", 10, 1, 6);
console.log(spada.getDamage());