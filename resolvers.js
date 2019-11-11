let readPool = require('./mysql/connect').readPool;
let db = require('./db');

const users = require('./services/users');


const rootValue = {
  language: () => 'GraphQL',
  champions: () => db.champions,
  champion: ({ name }) => {
    return db.champions.find(champion => champion.name === name)
  },
  users: async () => await users.getUsers()
}

module.exports = {
  rootValue
}