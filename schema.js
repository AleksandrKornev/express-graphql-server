let { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    language: String,
    champions: [Champion]
    champion(name: String): Champion
    users: [User]
  }
  type Champion {
    name: String
    attackDamage: Float
  }
  type User {
    name: String
  }
`)

module.exports = {
  schema
}