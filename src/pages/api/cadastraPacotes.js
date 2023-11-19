const db = require("./config/db");

export default async function cadastraPacotes(req, res) {

	if (req.method === "POST") {
		const { conteudo, remetente, destinatario } = JSON.parse(req.body);
		console.log(req.body);
		db.Pacote.create({
			conteudo: conteudo,
			remetente: remetente,
			destinatario: destinatario
		})
			.then((n) => { console.log(n); res.status(200).json(n) })
			.catch((err) => { console.log(err) });
	}


}