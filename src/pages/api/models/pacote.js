module.exports = (sequelize, Sequelize) => {

    const Pacote = sequelize.define("pacote", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, allowNull: false, primaryKey: true
        },
        conteudo: {
            type: Sequelize.STRING, allowNull: false
        },
        remetente: {
            type: Sequelize.STRING, allowNull: false
        },
        destinatario: {
            type: Sequelize.STRING, allowNull: false
        },
    });
    return Pacote;
}
