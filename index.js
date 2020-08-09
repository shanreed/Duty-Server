require('dotenv').config()
const server = require('./api/server.js');
const shortid = require('shortid')
const assigners = require('./data');

// let assigners = []

//CRUD




//READ
server.get('/api/assigners', (req, res) => {
    // console.log(assigners.data)
    res.json({assigners})
})

server.get('/api/assigners/:id', (req, res) => {
    const { id } = req.params; 

    const found = assigners.find(assigner => assigner.id === id);
    if (found) {
        res.status(200).json(found)
    } else {
        res.status(404).json({meassage: "assigner not found"});
    }
})

// //CREATE
// server.post('/api/assigners', (req, res) => {
//     const assignerInfo = req.body; 
//     assignerInfo.id = shortid.generate(); 
//     assigners.data.push(assignerInfo) 
//     res.status(201).json(assignerInfo)
// })


// //UPDATE


// //DELETE
// server.delete('/api/assigners/:id', (req, res) => {
//     const { id } = req.params; 

//     const deleted = assigners.find(assigner => assigner.id === id);
//     if (deleted) {
//         assigners= assigners.filter(assigner => assigner.id !== id);
//         res.status(200).json({Message:"Assigner Deleted" })
//     } else {
//         res.status(404).json({meassage: "assigner not found"});
//     }
// })


// //UPDATE- Change
// server.patch('/api/assigners/:id', (req, res) => {
//     const {id} = req.params;
//     const changes = req.body;

//     let found = assigners.data.find(assigner => assigner.id === id);

//     if (found) {
//         Object.assign(found, changes);
//         res.status(200).json(found);

//     } else {
//         res.status(404).json({message: "assigner not found"})
//     }
// })



// // //UPDATE Rplace
// // server.put('/api/assigners/:id', (req, res) => {
// //     const {id} = req.params;
// //     const changes = req.body;

// //     let index = assigners.data.findIndex(assigner => assigner.id === id); 
    
// //     if (index !== -1) {
// //         assigners.data[index] = changes
// //         res.status(200).json(assigners[index]);

// //     } else {
// //         res.status(404).json({message: "assigner not found"})
// //     }
// // })




const port =process.env.PORT; 


server.listen(port, () => console.log(`\n*** Server Running on http://localhost:${port} ***\n`))