const express = require("express");
const gql = require("./gql");
const { host, port } = require('./config/env')


const runApp = async () => {
  const app = express();

  await gql.start();
  gql.applyMiddleware({ app });

  app.listen({ host, port }, () => {
    console.log(`🚀 Server ready at http://${host}:${port}${gql.graphqlPath}`);
  });
};

runApp();
