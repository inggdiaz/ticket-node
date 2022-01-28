const {Sequelize} = require('sequelize')

const dbConnection = async () => {
    const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT} = process.env
    const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST, dialect: DB_DIALECT, port: DB_PORT
    });
    try {
        await db.authenticate();
        return db;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {dbConnection};
