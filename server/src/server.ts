// External Dependencies
import { connectToDatabase } from "./services/database.service";
import express from "express";
import cors from "cors";

// Routes
import { cartRouter } from "./routes/cart.router";
import { cakeRouter } from "./routes/cake.router";
import { categoryRouter } from "./routes/category.router";
import { cookieRouter } from "./routes/cookie.router";
import { cupcakeRouter } from "./routes/cupcake.router";
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
        app.use("/cart", cartRouter);
        app.use("/cake", cakeRouter);
        app.use("/category", categoryRouter);
        app.use("/cookie", cookieRouter);
        app.use("/cupcake", cupcakeRouter);
        app.use("/order", orderRouter);
        app.use("/product", productRouter);
        app.use("/user", userRouter);

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
