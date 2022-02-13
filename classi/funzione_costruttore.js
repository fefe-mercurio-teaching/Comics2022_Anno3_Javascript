// Giocatore:
//  Posizione X
//  Posizione Y
//  Nome
//  Punteggio

function Player() {
    this.x = 0;
    this.y = 0;
    this.name = "No name";
    this.score = 0;
}

Player.prototype.moveX = function(amount) {
    this.x += amount;
};

// Funzione moveX(amount) -----> this.x += amount;

const player1 = new Player();
const player2 = new Player();

player1.moveX(10);
player2.moveX(-5);

console.log(player1);
console.log(Player.prototype);

player1.__proto__.moveY = function(amount) {
    this.y += amount;
}

player1.moveY(10);

console.log(player1);
console.log(Player.prototype);