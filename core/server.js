const express = require('express');
const cors = require('cors')
const {dbConnection} = require('../core/database')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.SERVER_PORT

        this.dbConnect()
        this.paths = {
            user: '/api/users'
        }
        this.middlewares();
        this.routes();
    }

    /**
     * Connect DB
     * @returns {Promise<void>}
     */
    async dbConnect() {
        try {
            const db = await dbConnection();
            console.log(db);
            //Change this for services
        } catch (e) {
            //TODO Register Log
            console.log(e);
        }
    }

    /**
     * Define middlewares
     */
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.paths.user, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server run on port:', this.port);
        })
    }
}

module.exports = Server;
