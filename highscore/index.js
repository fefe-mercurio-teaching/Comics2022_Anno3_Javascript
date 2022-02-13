const fs = require("fs");

const playerName = process.argv[2];
const playerScore = parseInt(process.argv[3]);

const db = fs.readFileSync(__dirname + "/database.json", {
    encoding: "utf8"
});
const dbContent = JSON.parse(db);

if (dbContent[playerName] == undefined || dbContent[playerName] < playerScore) {
    dbContent[playerName] = playerScore;

    let fileContent = JSON.stringify(dbContent);

    fs.writeFileSync(__dirname + "/database.json", fileContent);
}

console.log(dbContent);