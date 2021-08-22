import "reflect-metadata";
import express from "express"
import { ConnectionOptions, createConnection } from "typeorm";
import config from "./ormconfig";
import { router } from "./routes";


createConnection(config as ConnectionOptions).then(async (connection) => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    const port = 8000;

    app.use("/", router)
    var listener = app.listen(port, () => {
        console.log("Server is always metal at " + port);
    });
}).catch((error) => {
    console.log(error);
})