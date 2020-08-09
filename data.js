const shortid = require('shortid')

module.exports = {
  assigners: [
        {
          id: shortid.generate(),
          username: "Shannon",
          email: "shannon@email.com",
          phoneNumber:1234567898,
          password: "shannon"
        },
        {
          id: shortid.generate(),
          username: "Jane",
          email: "jane@email.com",
          phoneNumber: 9876543212,
          password: "jane"
        },
        {
          id: shortid.generate(),
          username: "Jim",
          email: "jim@email.com",
          phoneNumber:3859267898,
          password: "jim"
        },
        {
          id: shortid.generate(),
          username: "Jack",
          email: "jack@email.com",
          phoneNumber: 1982343212,
          password: "jack"
        }
       
      ]
}





