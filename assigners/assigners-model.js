const data = require('../data')

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
  };
  
  function find(query) {
    let assigners = data.asssigners
    return assigners;
  }
  
  function findById(id) {
      console.log("this is the id from the model", id)
      let assignersArray = data.assigners
      const newArray = assignersArray.filter(assigner => assigner.id === id )
       console.log(newArray);
      return newArray
  }
  
  async function add(hub) {
    const [id] = await db('hubs').insert(hub);
  
    return findById(id);
  }
  
  function remove(id) {
    return db('hubs')
      .where({ id })
      .del();
  }
  
  function update(id, changes) {
    return db('hubs')
      .where({ id })
      .update(changes, '*');
  }
  
