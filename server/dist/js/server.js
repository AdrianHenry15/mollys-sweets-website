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
// cakes
const cake_router_1 = require("./routes/CakeRoutes/cake.router");
const cakeBase_router_1 = require("./routes/CakeRoutes/cakeBase.router");
const cakeFlavor_router_1 = require("./routes/CakeRoutes/cakeFlavor.router");
//cookies
const cookie_router_1 = require("./routes/CookieRoutes/cookie.router");
const cookieBase_router_1 = require("./routes/CookieRoutes/cookieBase.router");
const cookieFlavor_router_1 = require("./routes/CookieRoutes/cookieFlavor.router");
// cupcakes
const cupcake_router_1 = require("./routes/CupcakeRoutes/cupcake.router");
const cupcakeBase_router_1 = require("./routes/CupcakeRoutes/cupcakeBase.router");
const cupcakeFlavor_router_1 = require("./routes/CupcakeRoutes/cupcakeFlavor.router");
//other
const category_router_1 = require("./routes/category.router");
const cart_router_1 = require("./routes/cart.router");
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
    //cakes
    app.use("/cake-route", cake_router_1.cakeRouter);
    app.use("/cake-base-route", cakeBase_router_1.cakeBaseRouter);
    app.use("/cake-flavor-route", cakeFlavor_router_1.cakeFlavorRouter);
    // cookies
    app.use("/cookie-route", cookie_router_1.cookieRouter);
    app.use("/cookie-base-route", cookieBase_router_1.cookieBaseRouter);
    app.use("/cookie-flavor-route", cookieFlavor_router_1.cookieFlavorRouter);
    //cupcakes
    app.use("/cupcake-route", cupcake_router_1.cupcakeRouter);
    app.use("/cupcake-base-route", cupcakeBase_router_1.cupcakeBaseRouter);
    app.use("/cupcake-flavor-route", cupcakeFlavor_router_1.cupcakeFlavorRouter);
    app.use("/category-route", category_router_1.categoryRouter);
    app.use("/cart-route", cart_router_1.cartRouter);
    app.use("/order-route", order_router_1.orderRouter);
    app.use("/product-route", product_router_1.productRouter);
    app.use("/user-route", user_router_1.userRouter);
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
