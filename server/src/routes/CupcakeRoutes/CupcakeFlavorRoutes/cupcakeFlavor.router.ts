// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../../services/database.service";
import CupcakeFlavor from "../../../models/CupcakeModel/CupcakeFlavorModels/CupcakeFlavorMain";

// Global Config
export const cupcakeFlavorRouter = express.Router();

cupcakeFlavorRouter.use(express.json());

// GET
cupcakeFlavorRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cupcakeFlavors = (await collections
            .cupcakeFlavors!.find({})
            .toArray()) as unknown as typeof CupcakeFlavor[];

        res.status(200).send(cupcakeFlavors);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cupcakeFlavorRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cupcakeFlavor = (await collections.cupcakeFlavors!.findOne(
            query
        )) as unknown as typeof CupcakeFlavor;

        if (cupcakeFlavor) {
            res.status(200).send(cupcakeFlavor);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cupcakeFlavorRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newcupcakeFlavor = req.body as typeof CupcakeFlavor;
        const result = await collections.cupcakeFlavors!.insertOne(
            newcupcakeFlavor
        );

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cupcakeFlavor with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cupcakeFlavor.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cupcakeFlavorRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedcupcakeFlavor: typeof CupcakeFlavor =
            req.body as typeof CupcakeFlavor;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cupcakeFlavors!.updateOne(query, {
            $set: updatedcupcakeFlavor,
        });

        result
            ? res
                  .status(200)
                  .send(`Successfully updated cupcakeFlavor with id ${id}`)
            : res.status(304).send(`cupcakeFlavor with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cupcakeFlavorRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cupcakeFlavors!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(
                `Successfully removed cupcakeFlavor with id ${id}`
            );
        } else if (!result) {
            res.status(400).send(
                `Failed to remove cupcakeFlavor with id ${id}`
            );
        } else if (!result.deletedCount) {
            res.status(404).send(`cupcakeFlavor with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
