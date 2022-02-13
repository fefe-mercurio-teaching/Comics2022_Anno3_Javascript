class Player {
    inventory = [];

    addItem(item) {
        this.inventory.push(item);
    }

    printInventory() {
        console.log("Inventory: ");
        this.inventory.forEach(i => console.log("- " + i.name));
    }
}

module.exports = Player;