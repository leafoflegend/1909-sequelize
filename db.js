const Sequelize = require('sequelize');
const SECRETS = require('./secrets.js');

const db = new Sequelize(SECRETS.DB || 'postgres://localhost:5432/watchmen');
