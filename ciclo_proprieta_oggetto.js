let oggetto = {
    stringa: "Testo",
    numero: 200
};

for (let prop in oggetto) {
    console.log(prop + ": " + oggetto[prop]);
}