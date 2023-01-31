// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Order from "../models/Order";

// Global Config
export const orderRouter = express.Router();

orderRouter.use(express.json());

// GET
orderRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const orders = (await collections
            .orders!.find({})
            .toArray()) as unknown as typeof Order[];

        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
orderRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const order = (await collections.orders!.findOne(
            query
        )) as unknown as typeof Order;

        if (order) {
            res.status(200).send(order);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
orderRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newOrder = req.body as typeof Order;
        const result = await collections.orders!.insertOne(newOrder);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new order with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new order.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
orderRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedOrder: typeof Order = req.body as typeof Order;
        const query = { _id: new ObjectId(id) };

        const result = await collections.orders!.updateOne(query, {
            $set: updatedOrder,
        });

        result
            ? res.status(200).send(`Successfully updated order with id ${id}`)
            : res.status(304).send(`order with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
orderRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.orders!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed order with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove order with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`order with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
