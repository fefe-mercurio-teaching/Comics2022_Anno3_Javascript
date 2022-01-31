function moltiplica(f1, f2) {
    return f1 * f2;
}

console.log(moltiplica(3, 5));

/* ============================== */

const funzioneAnonima = function(f1, f2) {
    return f1 * f2;
}

console.log(funzioneAnonima(3, 5));

/* ============================== */

const funzioneFrecciaAnonima = (f1, f2) => f1 * f2;
const funzioneFrecciaAnonima2 = (f1, f2) => {
    return f1 * f2;
}

console.log(funzioneFrecciaAnonima(3, 5));