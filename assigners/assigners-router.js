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
  
      const assignersArray = data.assigners

        const newArray = assignersArray.filter(assigner => assigner)
        console.log(newArray);
        const task = newArray.map(assigner =>  assigner.tasks)
        console.log(task);
        res.status(200).json(data.assigners)
  // const { username, password } = req.body;
 
  // const assignerInfo = data.assigners.filter(assigner => assigner.username == username && assigner.password == password )
  // const userTasks = assignerInfo[0]
  // const tasks = userTasks.tasks.map(task =>  task.taskName)
  //  console.log(tasks)
  //  res.status(200).json(tasks)
  // console.log(data.assigners)
  // // function checkInfo(username) {
  // //   return username === data.assigners.username
  // // }
  // if (username === "shannon" && password === "reed") {
    
  // } else {
  //   res
  //     .status(403)
  //     .json({ error: "Username or Password incorrect. Please see Readme" });
  // }
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