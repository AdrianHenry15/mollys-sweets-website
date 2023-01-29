// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Cake from "../models/Cake";

// Global Config
export const cakeRouter = express.Router();

cakeRouter.use(express.json());

// GET
cakeRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cakes = (await collections
            .cakes!.find({})
            .toArray()) as typeof Cake[];

        res.status(200).send(cakes);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cakeRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cake = (await collections.cakes!.findOne(query)) as typeof Cake;

        if (cake) {
            res.status(200).send(cake);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cakeRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newCake = req.body as typeof Cake;
        const result = await collections.cakes!.insertOne(newCake);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cake with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cake.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cakeRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedCake: typeof Cake = req.body as typeof Cake;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cakes!.updateOne(query, {
            $set: updatedCake,
        });

        result
            ? res.status(200).send(`Successfully updated cake with id ${id}`)
            : res.status(304).send(`Cake with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cakeRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cakes!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed cake with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove cake with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Cake with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
