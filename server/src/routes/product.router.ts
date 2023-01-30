// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Product from "../models/Product";

// Global Config
export const productRouter = express.Router();

productRouter.use(express.json());

// GET
productRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const products = (await collections
            .products!.find({})
            .toArray()) as typeof Product[];

        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
productRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const product = (await collections.products!.findOne(
            query
        )) as typeof Product;

        if (product) {
            res.status(200).send(product);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
productRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newProduct = req.body as typeof Product;
        const result = await collections.products!.insertOne(newProduct);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new product with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new product.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
productRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedProduct: typeof Product = req.body as typeof Product;
        const query = { _id: new ObjectId(id) };

        const result = await collections.products!.updateOne(query, {
            $set: updatedProduct,
        });

        result
            ? res.status(200).send(`Successfully updated product with id ${id}`)
            : res.status(304).send(`product with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
productRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.products!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed product with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove product with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`product with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
