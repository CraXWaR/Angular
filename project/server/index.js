const express = require('express');
const app = express();
const cors = require('./middlewares/cors');
const mongoose = require('mongoose');
const session = require('./middlewares/session');
const router = require('./routes');

const connectionString = 'mongodb://127.0.0.1:27017/test';
const port = 'http://localhost:3000';

const initializeDb = () => mongoose.connect(connectionString);

serverStart();

async function serverStart() {
    initializeDb();
    app.use(express.json());
    app.use(cors());
    app.use(session());
    app.use(router);

    app.listen('3000', () => console.log('Server started at 3000'))
}