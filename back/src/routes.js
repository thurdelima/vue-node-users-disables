const express = require("express");

const routes = express.Router();

const userController = require('./controllers/UsersController');

routes.get('/users/:page', userController.index);

routes.post('/user', userController.searchUser);

module.exports = routes;