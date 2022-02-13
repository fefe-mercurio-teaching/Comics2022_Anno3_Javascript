const Item = require("./item");

class Weapon extends Item {
    constructor(name, cost, minDamage, maxDamage) {
        super(name, cost);

        this.damage = {minDamage, maxDamage};
    }
}

module.exports = Weapon;