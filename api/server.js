const express = require('express');
const helmet = require('helmet');
const cors = require('cors')


const AssignersRouter = require('../assigners/assigners-router.js');
const TasksRouter = require('../tasks/tasks-router.js');
const server = express();

server.use(express.json())


server.use(helmet());
server.use(cors());

server.use('/api/assigners', AssignersRouter)
server.use('/api/tasks', TasksRouter)


server.use('/duty', (req, res) => {
    res.send("Welcomto the Duty Server")
})
module.exports = server;