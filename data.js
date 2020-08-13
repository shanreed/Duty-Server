const shortid = require('shortid')

module.exports = {
  assigners: [
        {
          id: shortid.generate(),
          username: "Shannon",
          email: "shannon@email.com",
          phoneNumber:1234567898,
          password: "shannon",
          tasks: 
            {
              id: shortid.generate(),
              taskName: "Clean",
              compensation: "$40.00",
              directions: "Wash the dishes, sweep the floor, mop the floor, make the beds, clan the bathroom",
              dueDate: "2020-10-10"
            }
        
        },
        {
          id: shortid.generate(),
          username: "Jane",
          email: "jane@email.com",
          phoneNumber: 9876543212,
          password: "jane",
          tasks: 
            {
              id: shortid.generate(),
              taskName: "Yard Work",
              compensation: "$60.00",
              directions: "Cut the grass, pressure wash the driveway, pull weeds up, cut tree limbs, rake leaves",
              dueDate: "2020-08-18"
            }
          
        },
        {
          id: shortid.generate(),
          username: "Jim",
          email: "jim@email.com",
          phoneNumber:3859267898,
          password: "jim",
          tasks: 
            {
              id: shortid.generate(),
              taskName: "Clean",
              compensation: "$40.00",
              directions: "Wash the dishes, sweep the floor, mop the floor, make the beds, clan the bathroom",
              dueDate: "2020-10-10"
            }
          
        },
        {
          id: shortid.generate(),
          username: "Jack",
          email: "jack@email.com",
          phoneNumber: 1982343212,
          password: "jack",
          tasks: 
            {
              id: shortid.generate(),
              taskName: "Yard Work",
              compensation: "$60.00",
              directions: "Cut the grass, pressure wash the driveway, pull weeds up, cut tree limbs, rake leaves",
              dueDate: "2020-08-18"
            }
          
        }
       
      ]
}





