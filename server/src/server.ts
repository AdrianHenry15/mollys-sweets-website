// External Dependencies
import { connectToDatabase } from "./services/database.service";
import { cartRouter } from "./routes/cart.router";
import express from "express";

// Global Variables
const app = express();

connectToDatabase()
    .then(() => {
        app.use("/cart", cartRouter);

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
