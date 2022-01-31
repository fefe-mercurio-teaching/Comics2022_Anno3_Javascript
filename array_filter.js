let arrayOriginale = [345, 654, 23, 20, 4004, 0, 43, 2, 9405, 8438];

let nuovoArray = arrayOriginale.filter(element => element > 100);
let nuovoArray2 = arrayOriginale.filter(function(element) {
    return element % 2 == 0;
});
let nuovoArray3 = arrayOriginale.map(elemento => elemento * 2);

console.log(nuovoArray3);