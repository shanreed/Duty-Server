const express = require("express");
const shortid = require('shortid')

const data = require("../data");
const Assigners = require("./assigners-model");

const router = express.Router();


router.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "shannon" && password === "reed") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

router.get("/", (req, res) => {
    Assigners.find(data.assigners)
    res.send(data.assigners)
});

router.get("/:id", (req, res) => {
  const id = req.params.id
      let assignersArray = data.assigners
      // console.log(assignersArray);
      const newArray = assignersArray.filter(assigner => assigner.id === id )
       console.log(newArray);
       const name = newArray.map(assigner =>  assigner.username)
       res.send(name)
});

router.post("/", (req, res) => {
  const assignerInfo = req.body; 
    assignerInfo.id = shortid.generate(); 
    data.assigners.push(assignerInfo) 
    res.status(201).json(assignerInfo)
})

module.exports = router;