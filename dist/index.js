"use strict";
exports.__esModule = true;
var express = require("express");
var metrics_1 = require("./metrics");
var app = express();
var port = process.env.PORT || '8087';
app.get('/', function (req, res) { return res.render('intro.ejs', { name: req.params.name }); });
app.get('/hello/Team7', function (req, res) { return res.render('helloT7.ejs', { name: req.params.name }); });
app.get('/hello/:name', function (req, res) { return res.send("Hello " + req.params.name); });
app.get('/hello', function (req, res) { return res.render('hello.ejs', { name: req.params.name }); });
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("server is listening on port " + port);
});
app.get('/metrics', function (req, res) {
    metrics_1.MetricsHandler.get(function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});
