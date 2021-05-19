const express = require('express');
const mongoose = require("mongoose");
const databaseConfig = require("./config/database");
const cors = require('cors');


const app = express();
const routes = require('./routes');
// eslint-disable-next-line import/order
const server = require('http').Server(app);
// require('./models/index');

mongoose.connect(databaseConfig.uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// const models = [];

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

console.log('server on');
