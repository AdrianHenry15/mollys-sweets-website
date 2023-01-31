// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../../services/database.service";
import CupcakeBase from "../../../models/CupcakeModel/CupcakeBaseModels/CupcakeBase";

// Global Config
export const cupcakeBaseRouter = express.Router();

cupcakeBaseRouter.use(express.json());

// GET
cupcakeBaseRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cupcakeBases = (await collections
            .cupcakeBases!.find({})
            .toArray()) as unknown as typeof CupcakeBase[];

        res.status(200).send(cupcakeBases);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cupcakeBaseRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cupcakeBase = (await collections.cupcakeBases!.findOne(
            query
        )) as unknown as typeof CupcakeBase;

        if (cupcakeBase) {
            res.status(200).send(cupcakeBase);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cupcakeBaseRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newcupcakeBase = req.body as typeof CupcakeBase;
        const result = await collections.cupcakeBases!.insertOne(
            newcupcakeBase
        );

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cupcakeBase with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cupcakeBase.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cupcakeBaseRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedcupcakeBase: typeof CupcakeBase =
            req.body as typeof CupcakeBase;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cupcakeBases!.updateOne(query, {
            $set: updatedcupcakeBase,
        });

        result
            ? res
                  .status(200)
                  .send(`Successfully updated cupcakeBase with id ${id}`)
            : res.status(304).send(`cupcakeBase with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cupcakeBaseRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cupcakeBases!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(
                `Successfully removed Cupcake Base with id ${id}`
            );
        } else if (!result) {
            res.status(400).send(`Failed to remove Cupcake Base with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Cupcake Base with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
