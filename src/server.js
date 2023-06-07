'use strict';

const express = require("express");
const app = express();
const stamper = require('./Middlewares/Stamper');
const notFoundHandler = require('./Handlers/404');
const errorHandler = require('./Handlers/500');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Home')
})

app.get('/laith', stamper, (req, res) => {
    res.json({
        'name': 'Laith',
        'degree': 'bachelor',
        'time': req.timeStamp
    })
})

app.get('/error', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    })
    res.send(result);
})

app.use('*', notFoundHandler);
app.use(errorHandler)

function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}
