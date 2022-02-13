class Item {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    getDamage() {
        return 0;
    }
}

class Weapon extends Item {
    constructor(name, cost, minDamage, maxDamage) {
        super(name, cost);

        this.damage = {
            min: minDamage,
            max: maxDamage
        };
    }

    getDamage() {
        return Math.floor(Math.random() * this.damage.max - this.damage.min) + this.damage.min + 1; 
    }
}

let spada = new Weapon("Spada", 10, 1, 6);
console.log(spada.getDamage());