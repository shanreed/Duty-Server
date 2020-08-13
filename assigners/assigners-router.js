const express = require("express");
const shortid = require('shortid')

const data = require("../data");

const router = express.Router();


//GET ASSIGNERS
router.get("/", (req, res) => {
    let assignersArray = data.assigners
    const newArray = assignersArray.map(assigner => assigner)
    res.send(newArray)
});


//GET ASSIGNER BY ID
router.get("/:id", (req, res) => {
      const id = req.params.id
      let assignersArray = data.assigners
      const newArray = assignersArray.filter(assigner => assigner.id === id )
     
      if (newArray.length > 0) {
          const name = newArray.map(assigner =>  assigner.username)
          res.send(name)
      } else {
          res.status(403).json({ error: "That user does not Exist" });
  }
      });


//CREAT A NEW ASSIGNER
router.post("/", (req, res) => {
    const {username, email, phoneNumber, password} = req.body 
    console.log(req.body);
    if(username && email && phoneNumber && password) {
      const assignerInfo = req.body
      assignerInfo.id = shortid.generate(); 
      data.assigners.push(assignerInfo) 
      res.status(201).json(assignerInfo)
    } else {
      res.status(403).json({ error: "Username, email, phone number and password required" });

    }
    
})

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  let assignersArray = data.assigners
  const assignerInfo = assignersArray.filter(assigner => assigner.username == username && assigner.password == password )
    if (assignerInfo.length > 0) {
      const task = assignerInfo.map(assigner =>  assigner.tasks)
        console.log(task);
        res.status(200).json(task)
    } else {
      res.status(403).json({ error: "Username or Password incorrect." });

    }
});

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