const db = require("./src/pages/api/config/db")

db.sequelize.sync({ force: true }).then(() => { console.log("Sincronizando Banco"); });