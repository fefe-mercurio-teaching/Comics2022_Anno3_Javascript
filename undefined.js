const array = ["latte", "pane", "uova", null];

let variabile;

console.log(variabile === undefined);

function moltiplica(fattore1, fattore2) {
    if (typeof fattore1 != "number" || typeof fattore2 != "number") {
        console.error("Entrambi i fattori devono essere numeri");
        return 0;
    }

    return fattore1 * fattore2;
}

console.log(moltiplica(3, 5));