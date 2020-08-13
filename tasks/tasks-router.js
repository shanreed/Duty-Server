const express = require("express");
const shortid = require('shortid')

const data = require("../data");
const Tasks = require("./tasks-model");

const router = express.Router();


//GET ASSIGNERS
router.get("/", (req, res) => {
    let assignersArray = data.assigners
    const newArray = assignersArray.map(assigner => assigner.tasks)
    res.send(newArray)
});




module.exports = router;
