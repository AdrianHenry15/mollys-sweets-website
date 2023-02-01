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
//cake bases
const cakeBase_router_1 = require("./routes/CakeRoutes/CakeBaseRoutes/cakeBase.router");
// import { cakeShapeRouter } from "./routes/CakeRoutes/CakeBaseRoutes/cakeShape.router";
// import { cakeSizeRouter } from "./routes/CakeRoutes/CakeBaseRoutes/cakeSize.router";
// import { cakeTierRouter } from "./routes/CakeRoutes/CakeBaseRoutes/cakeTier.router";
// cake flavors
const cakeFlavor_router_1 = require("./routes/CakeRoutes/CakeFlavorRoutes/cakeFlavor.router");
// import { cakeFillingRouter } from "./routes/CakeRoutes/CakeFlavorRoutes/cakeFilling.router";
// import { cakeFrostingRouter } from "./routes/CakeRoutes/CakeFlavorRoutes/cakeFrosting.router";
// import { cakeFruitRouter } from "./routes/CakeRoutes/CakeFlavorRoutes/cakeFruit.router";
//cookies
const cookie_router_1 = require("./routes/CookieRoutes/cookie.router");
//cookie bases
const cookieBase_router_1 = require("./routes/CookieRoutes/CookieBaseRoutes/cookieBase.router");
// import { cookieQuantityRouter } from "./routes/CookieRoutes/CookieBaseRoutes/cookieQuantity.router";
// import { cookieSizeRouter } from "./routes/CookieRoutes/CookieBaseRoutes/cookieSize.router";
//cookie flavors
const cookieFlavor_router_1 = require("./routes/CookieRoutes/CookieFlavorRoutes/cookieFlavor.router");
// import { cookieFrostingRouter } from "./routes/CookieRoutes/CookieFlavorRoutes/cookieFrosting.router";
// cupcakes
const cupcake_router_1 = require("./routes/CupcakeRoutes/cupcake.router");
//cupcake bases
const cupcakeBase_router_1 = require("./routes/CupcakeRoutes/CupcakeBaseRoutes/cupcakeBase.router");
// import { cupcakeQuantityRouter } from "./routes/CupcakeRoutes/CupcakeBaseRoutes/cupcakeQuantity.router";
// import { cupcakeSizeRouter } from "./routes/CupcakeRoutes/CupcakeBaseRoutes/cupcakeSize.router";
// cupcake flavors
const cupcakeFlavor_router_1 = require("./routes/CupcakeRoutes/CupcakeFlavorRoutes/cupcakeFlavor.router");
// import { cupcakeFrostingRouter } from "./routes/CupcakeRoutes/CupcakeFlavorRoutes/cupcakeFrosting.router";
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
    //cake bases
    app.use("/cake-base-route", cakeBase_router_1.cakeBaseRouter);
    // app.use("/cake-size-route", cakeSizeRouter);
    // app.use("/cake-shape-route", cakeShapeRouter);
    // app.use("/cake-tier-route", cakeTierRouter);
    // cake flavors
    app.use("/cake-flavor-route", cakeFlavor_router_1.cakeFlavorRouter);
    // app.use("/cake-frosting-route", cakeFrostingRouter);
    // app.use("/cake-filling-route", cakeFillingRouter);
    // app.use("/cake-fruit-route", cakeFruitRouter);
    // cookies
    app.use("/cookie-route", cookie_router_1.cookieRouter);
    //cookie bases
    app.use("/cookie-base-route", cookieBase_router_1.cookieBaseRouter);
    // app.use("/cookie-size-route", cookieSizeRouter);
    // app.use("/cookie-quantity-route", cookieQuantityRouter);
    //cookie flavors
    app.use("/cookie-flavor-route", cookieFlavor_router_1.cookieFlavorRouter);
    // app.use("/cookie-frosting-route", cookieFrostingRouter);
    //cupcakes
    app.use("/cupcake-route", cupcake_router_1.cupcakeRouter);
    //cupcake bases
    app.use("/cupcake-base-route", cupcakeBase_router_1.cupcakeBaseRouter);
    // app.use("/cupcake-size-route", cupcakeSizeRouter);
    // app.use("/cupcake-quantity-route", cupcakeQuantityRouter);
    // cupcake flavors
    app.use("/cupcake-flavor-route", cupcakeFlavor_router_1.cupcakeFlavorRouter);
    // app.use("/cupcake-frosting-route", cupcakeFrostingRouter);
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
