// External Dependencies
import { connectToDatabase } from "./services/database.service";
import express from "express";
import cors from "cors";

// Routes

// cakes
import { cakeRouter } from "./routes/CakeRoutes/cake.router";
//cake bases
import { cakeBaseRouter } from "./routes/CakeRoutes/CakeBaseRoutes/cakeBase.router";
// import { cakeShapeRouter } from "./routes/CakeRoutes/CakeBaseRoutes/cakeShape.router";
// import { cakeSizeRouter } from "./routes/CakeRoutes/CakeBaseRoutes/cakeSize.router";
// import { cakeTierRouter } from "./routes/CakeRoutes/CakeBaseRoutes/cakeTier.router";
// cake flavors
import { cakeFlavorRouter } from "./routes/CakeRoutes/CakeFlavorRoutes/cakeFlavor.router";
// import { cakeFillingRouter } from "./routes/CakeRoutes/CakeFlavorRoutes/cakeFilling.router";
// import { cakeFrostingRouter } from "./routes/CakeRoutes/CakeFlavorRoutes/cakeFrosting.router";
// import { cakeFruitRouter } from "./routes/CakeRoutes/CakeFlavorRoutes/cakeFruit.router";

//cookies
import { cookieRouter } from "./routes/CookieRoutes/cookie.router";
//cookie bases
import { cookieBaseRouter } from "./routes/CookieRoutes/CookieBaseRoutes/cookieBase.router";
// import { cookieQuantityRouter } from "./routes/CookieRoutes/CookieBaseRoutes/cookieQuantity.router";
// import { cookieSizeRouter } from "./routes/CookieRoutes/CookieBaseRoutes/cookieSize.router";
//cookie flavors
import { cookieFlavorRouter } from "./routes/CookieRoutes/CookieFlavorRoutes/cookieFlavor.router";
// import { cookieFrostingRouter } from "./routes/CookieRoutes/CookieFlavorRoutes/cookieFrosting.router";

// cupcakes
import { cupcakeRouter } from "./routes/CupcakeRoutes/cupcake.router";
//cupcake bases
import { cupcakeBaseRouter } from "./routes/CupcakeRoutes/CupcakeBaseRoutes/cupcakeBase.router";
// import { cupcakeQuantityRouter } from "./routes/CupcakeRoutes/CupcakeBaseRoutes/cupcakeQuantity.router";
// import { cupcakeSizeRouter } from "./routes/CupcakeRoutes/CupcakeBaseRoutes/cupcakeSize.router";
// cupcake flavors
import { cupcakeFlavorRouter } from "./routes/CupcakeRoutes/CupcakeFlavorRoutes/cupcakeFlavor.router";
// import { cupcakeFrostingRouter } from "./routes/CupcakeRoutes/CupcakeFlavorRoutes/cupcakeFrosting.router";
//other
import { categoryRouter } from "./routes/category.router";
import { cartRouter } from "./routes/cart.router";
import { orderRouter } from "./routes/order.router";
import { productRouter } from "./routes/product.router";
import { userRouter } from "./routes/user.router";

// Global Variables
const app = express();

// Express
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

connectToDatabase()
    .then(() => {
        //cakes
        app.use("/cake-route", cakeRouter);
        //cake bases
        app.use("/cake-base-route", cakeBaseRouter);
        // app.use("/cake-size-route", cakeSizeRouter);
        // app.use("/cake-shape-route", cakeShapeRouter);
        // app.use("/cake-tier-route", cakeTierRouter);
        // cake flavors
        app.use("/cake-flavor-route", cakeFlavorRouter);
        // app.use("/cake-frosting-route", cakeFrostingRouter);
        // app.use("/cake-filling-route", cakeFillingRouter);
        // app.use("/cake-fruit-route", cakeFruitRouter);

        // cookies
        app.use("/cookie-route", cookieRouter);
        //cookie bases
        app.use("/cookie-base-route", cookieBaseRouter);
        // app.use("/cookie-size-route", cookieSizeRouter);
        // app.use("/cookie-quantity-route", cookieQuantityRouter);
        //cookie flavors
        app.use("/cookie-flavor-route", cookieFlavorRouter);
        // app.use("/cookie-frosting-route", cookieFrostingRouter);

        //cupcakes
        app.use("/cupcake-route", cupcakeRouter);
        //cupcake bases
        app.use("/cupcake-base-route", cupcakeBaseRouter);
        // app.use("/cupcake-size-route", cupcakeSizeRouter);
        // app.use("/cupcake-quantity-route", cupcakeQuantityRouter);
        // cupcake flavors
        app.use("/cupcake-flavor-route", cupcakeFlavorRouter);
        // app.use("/cupcake-frosting-route", cupcakeFrostingRouter);

        app.use("/category-route", categoryRouter);
        app.use("/cart-route", cartRouter);
        app.use("/order-route", orderRouter);
        app.use("/product-route", productRouter);
        app.use("/user-route", userRouter);

        // make sure env is never undefined
        let port: string;
        if (process.env.PORT) {
            port = process.env.PORT;
        } else {
            throw new Error("Enviroment Variables Invalid");
        }

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
