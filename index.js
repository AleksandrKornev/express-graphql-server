
const express = require('express');
const { graphql, buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const { notFound } = require('./middlewares');

const { rootValue } = require('./resolvers');
const { schema } = require('./schema');

const routes = require('./routes');

const app = express();

app.use('/', routes);

app.use(cors());
app.use('/graphql', graphqlHTTP({
  rootValue, schema, graphiql: true
}));
app.use(notFound);

app.listen(4000, () => console.log('Listening on 4000'));