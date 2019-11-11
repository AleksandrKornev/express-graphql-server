const readPool = require('../../mysql/connect').readPool;
  
class Users {
  async getUsers() {
    let info = await readPool.query('SELECT * FROM users');

    return info[0];
  }
}

module.exports = new Users();