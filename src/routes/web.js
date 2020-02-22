import express from "express";
import { mainn } from "./../controllers/id";
let router = express.Router();

/**
 * init all routes
 * @param server from exactly express module
 */
let initRoutes = (server,io) => {
    
    router.get("/", mainn.getHome);
    router.post("/nodepost", function(req, res, next) {
        console.log(req.body);
        io.sockets.emit("serverSendData", 12);
        res.send("succeed");
    });
    
    return server.use("/", router);
};

module.exports = initRoutes;