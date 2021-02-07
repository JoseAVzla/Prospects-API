"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var typeorm_1 = require("typeorm");
var cors = require("cors");
var prospectos_routes_1 = require("./routes/prospectos.routes");
var port = process.env.port || 3001;
typeorm_1.createConnection()
    .then(function () {
    var app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/", prospectos_routes_1.default);
    app.listen(port, function () {
        return console.log("Ejecutando server en http://localhost:" + port + "!!");
    });
})
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=server.js.map