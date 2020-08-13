const express = require("express");
const shortid = require('shortid')

const data = require("../data");


const router = express.Router();


//GET ASSIGNERS
router.get("/", (req, res) => {
    // console.log(data);
    let assignersArray = data.assigners
    console.log("Assigners Array:", assignersArray);
    const newArray = assignersArray.map(assigner => assigner.tasks)
    res.send(newArray)
});




module.exports = router;
