const db = require("./config/db");

export default async function getPacotes(req, res) {
    db.Pacote.findAll().then((n) => {console.log(n); res.status(200).json(n)}).catch((err) => { console.log(err)});
}