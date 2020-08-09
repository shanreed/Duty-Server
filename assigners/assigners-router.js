const express = require("express");
const shortid = require('shortid')

const data = require("../data");
const Assigners = require("./assigners-model");

const router = express.Router();


//GET ASSIGNERS
router.get("/", (req, res) => {
    Assigners.find(data.assigners)
    res.send(data.assigners)
});


//GET ASSIGNER BY ID
router.get("/:id", (req, res) => {
  const id = req.params.id
      let assignersArray = data.assigners
      const newArray = assignersArray.filter(assigner => assigner.id === id )
      console.log(newArray);
      const name = newArray.map(assigner =>  assigner.username)
      res.send(name)
});


//CREAT A NEW ASSIGNER
router.post("/", (req, res) => {
  const assignerInfo = req.body; 
    assignerInfo.id = shortid.generate(); 
    data.assigners.push(assignerInfo) 
    res.status(201).json(assignerInfo)
})


//UPDATE ASSIGNER
router.patch("/:id", (req, res) => {
  const {id} = req.params;
      const changes = req.body;
      let found = data.assigners.find(assigner => assigner.id === id);
      if (found) {
          Object.assign(found, changes);
          res.status(200).json(found);
      } else {
          res.status(404).json({message: "assigner not found"})
      }
})



//DELETE ASSIGNER
router.delete("/:id", (req, res) => {
  const id = req.params.id
  let assignersArray = data.assigners
  const newArray = assignersArray.findIndex(function(item) {return item.id === id})
  assignersArray.splice(newArray, 1)
      console.log(newArray);
      res.send("Assigner Deleted")
   
    
})

module.exports = router;