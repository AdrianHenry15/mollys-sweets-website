"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
const database_service_1 = require("./services/database.service");
const cart_router_1 = require("./routes/cart.router");
const cake_router_1 = require("./routes/cake.router");
const express_1 = __importDefault(require("express"));
// Global Variables
const app = (0, express_1.default)();
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/cart", cart_router_1.cartRouter);
    app.use("/cake", cake_router_1.cakeRouter);
    // make sure env is never undefined
    let port;
    if (process.env.PORT) {
        port = process.env.PORT;
    }
    else {
        throw new Error("Enviroment Variables Invalid");
    }
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
