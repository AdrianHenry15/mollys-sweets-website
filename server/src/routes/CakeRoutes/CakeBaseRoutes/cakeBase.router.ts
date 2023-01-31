// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../../services/database.service";
import CakeBase from "../../../models/CakeModel/CakeBaseModels/CakeBase";

// Global Config
export const cakeBaseRouter = express.Router();

cakeBaseRouter.use(express.json());

// GET
cakeBaseRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cakeBases = (await collections
            .cakeBases!.find({})
            .toArray()) as unknown as typeof CakeBase[];

        res.status(200).send(cakeBases);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cakeBaseRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cakeBase = (await collections.cakeBases!.findOne(
            query
        )) as unknown as typeof CakeBase;

        if (cakeBase) {
            res.status(200).send(cakeBase);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cakeBaseRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newcakeBase = req.body as typeof CakeBase;
        const result = await collections.cakeBases!.insertOne(newcakeBase);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cakeBase with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cakeBase.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cakeBaseRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedcakeBase: typeof CakeBase = req.body as typeof CakeBase;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cakeBases!.updateOne(query, {
            $set: updatedcakeBase,
        });

        result
            ? res
                  .status(200)
                  .send(`Successfully updated cakeBase with id ${id}`)
            : res.status(304).send(`cakeBase with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cakeBaseRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cakeBases!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed cakeBase with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove cakeBase with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`cakeBase with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
