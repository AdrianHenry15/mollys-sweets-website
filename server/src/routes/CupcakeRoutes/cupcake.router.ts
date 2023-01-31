// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../services/database.service";
import Cupcake from "../../models/CupcakeModel/Cupcake";

// Global Config
export const cupcakeRouter = express.Router();

cupcakeRouter.use(express.json());

// GET
cupcakeRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cupcakes = (await collections
            .cupcakes!.find({})
            .toArray()) as unknown as typeof Cupcake[];

        res.status(200).send(cupcakes);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cupcakeRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cupcake = (await collections.cupcakes!.findOne(
            query
        )) as unknown as typeof Cupcake;

        if (cupcake) {
            res.status(200).send(cupcake);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cupcakeRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newCupcake = req.body as typeof Cupcake;
        const result = await collections.cupcakes!.insertOne(newCupcake);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cupcake with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cupcake.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cupcakeRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedCupcake: typeof Cupcake = req.body as typeof Cupcake;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cupcakes!.updateOne(query, {
            $set: updatedCupcake,
        });

        result
            ? res.status(200).send(`Successfully updated cupcake with id ${id}`)
            : res.status(304).send(`cupcake with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cupcakeRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cupcakes!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed cupcake with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove cupcake with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`cupcake with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
