require('dotenv').config();
const Server = require('./core/server')

const server = new Server();

server.listen()
