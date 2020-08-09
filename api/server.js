const express = require('express');
const helmet = require('helmet');
const cors = require('cors')


const AssignersRouter = require('../assigners/assigners-router.js');

const server = express();

server.use(express.json())


server.use(helmet());
server.use(cors());

server.use('/assigners', AssignersRouter)

module.exports = server;