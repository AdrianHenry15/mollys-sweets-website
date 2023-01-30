"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External Dependencies
const database_service_1 = require("./services/database.service");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Routes
const cart_router_1 = require("./routes/cart.router");
const cake_router_1 = require("./routes/cake.router");
const category_router_1 = require("./routes/category.router");
const cookie_router_1 = require("./routes/cookie.router");
const cupcake_router_1 = require("./routes/cupcake.router");
const order_router_1 = require("./routes/order.router");
const product_router_1 = require("./routes/product.router");
const user_router_1 = require("./routes/user.router");
// Global Variables
const app = (0, express_1.default)();
// Express
app.use((0, cors_1.default)());
// parse requests of content-type - application/json
app.use(express_1.default.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/cart", cart_router_1.cartRouter);
    app.use("/cake", cake_router_1.cakeRouter);
    app.use("/category", category_router_1.categoryRouter);
    app.use("/cookie", cookie_router_1.cookieRouter);
    app.use("/cupcake", cupcake_router_1.cupcakeRouter);
    app.use("/order", order_router_1.orderRouter);
    app.use("/product", product_router_1.productRouter);
    app.use("/user", user_router_1.userRouter);
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
