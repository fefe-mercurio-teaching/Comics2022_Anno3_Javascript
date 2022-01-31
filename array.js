let arrayVuoto = [];
let listaDellaSpesa = ["latte", "pane"];

listaDellaSpesa.push("uova");

console.log("FOR:");
for (let i = 0; i < listaDellaSpesa.length; i++) {
    console.log("Elemento " + i + ": " + listaDellaSpesa[i]);
}

console.log("\nFunzione forEach:");
listaDellaSpesa.forEach((elemento, i) => {
    console.log("Elemento " + i + ": " + elemento);
});