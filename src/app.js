const express = require("express");
const gql = require("./gql");
const { host, port } = require('./config/env')


const runApp = async () => {
  const app = express();

  await gql.start();
  gql.applyMiddleware({ app });

  const server = app.listen({ host, port }, () => {
    console.log(`🚀 Server ready at http://${host}:${port}${gql.graphqlPath}`);
  });

  // 参考：http://nodejs.cn/learn/how-to-exit-from-a-nodejs-program
  process.on('SIGTERM', () => {
    server.close(() => {
      console.log('进程已终止')
    })
  })
};

runApp();
