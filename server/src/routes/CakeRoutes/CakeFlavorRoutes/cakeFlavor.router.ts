// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../../services/database.service";
import CakeFlavor from "../../../models/CakeModel/CakeFlavorModels/CakeFlavorMain";

// Global Config
export const cakeFlavorRouter = express.Router();

cakeFlavorRouter.use(express.json());

// GET
cakeFlavorRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cakeFlavors = (await collections
            .cakeFlavors!.find({})
            .toArray()) as unknown as typeof CakeFlavor[];

        res.status(200).send(cakeFlavors);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cakeFlavorRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cakeFlavor = (await collections.cakeFlavors!.findOne(
            query
        )) as unknown as typeof CakeFlavor;

        if (cakeFlavor) {
            res.status(200).send(cakeFlavor);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cakeFlavorRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newcakeFlavor = req.body as typeof CakeFlavor;
        const result = await collections.cakeFlavors!.insertOne(newcakeFlavor);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cakeFlavor with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cakeFlavor.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cakeFlavorRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedcakeFlavor: typeof CakeFlavor =
            req.body as typeof CakeFlavor;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cakeFlavors!.updateOne(query, {
            $set: updatedcakeFlavor,
        });

        result
            ? res
                  .status(200)
                  .send(`Successfully updated cakeFlavor with id ${id}`)
            : res.status(304).send(`cakeFlavor with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cakeFlavorRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cakeFlavors!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(
                `Successfully removed cakeFlavor with id ${id}`
            );
        } else if (!result) {
            res.status(400).send(`Failed to remove cakeFlavor with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`cakeFlavor with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
