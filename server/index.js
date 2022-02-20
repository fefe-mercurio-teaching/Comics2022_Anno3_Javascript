const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

let classifica = {
    entries: [
        {
            name: "federico",
            score: 10000
        },
        {
            name: "pincopallino",
            score: 2394
        }
    ]
}

app.get("/", (req, res) => {
    res.send("Ciao!");
});

app.get("/score", (req, res) => {
    res.send(JSON.stringify(classifica));
});

app.get("/score/:player", (request, response) => {
    let playerName = request.params.player;
    let playerInfo = classifica.entries.find(e => e.name == playerName);

    response.send(JSON.stringify(playerInfo));
});

app.get("/prova", (req, res) => {
    res.send("Sei nella pagina di prova.");
});

app.post("/set-score", (req, res) => {
    let playerInfo = classifica.entries.find(e => e.name == req.body.name);
    if (playerInfo)
    {
        playerInfo.score = Math.max(playerInfo.score, req.body.score);
    }
    else
    {
        classifica.entries.push({
            name: req.body.name,
            score: parseInt(req.body.score)
        });
    }

    res.send("Risposta ricevuta");
});

app.listen(3000, () => console.log("Server in funzione"));