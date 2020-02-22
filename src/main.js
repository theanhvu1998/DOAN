import express from "express";
import configViewEngine from "./config/viewEngine";
import initRoute from "./routes/web";
import http from "http";
import socketIo from "socket.io";
import bodyParser from "body-parser";

let app = express();
let server = http.createServer(app);
let io = socketIo(server)
let port = 3000;

configViewEngine(app);

app.use(bodyParser.urlencoded({
    extended: true
  }));

initRoute(app, io);

server.listen(port, () => console.log(`web running is port ${port}!`));