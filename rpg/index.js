// File di partenza

const Player = require("./player");
const Weapon = require("./weapon")

const player = new Player();
player.addItem(new Weapon("Spada", 10, 1, 6));
player.printInventory();

