// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../../services/database.service";
import CookieFlavor from "../../../models/CookieModel/CookieFlavorModels/CookieFlavorMain";

// Global Config
export const cookieFlavorRouter = express.Router();

cookieFlavorRouter.use(express.json());

// GET
cookieFlavorRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cookieFlavors = (await collections
            .cookieFlavors!.find({})
            .toArray()) as unknown as typeof CookieFlavor[];

        res.status(200).send(cookieFlavors);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cookieFlavorRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cookieFlavor = (await collections.cookieFlavors!.findOne(
            query
        )) as unknown as typeof CookieFlavor;

        if (cookieFlavor) {
            res.status(200).send(cookieFlavor);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cookieFlavorRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newcookieFlavor = req.body as typeof CookieFlavor;
        const result = await collections.cookieFlavors!.insertOne(
            newcookieFlavor
        );

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cookieFlavor with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cookieFlavor.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cookieFlavorRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedcookieFlavor: typeof CookieFlavor =
            req.body as typeof CookieFlavor;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cookieFlavors!.updateOne(query, {
            $set: updatedcookieFlavor,
        });

        result
            ? res
                  .status(200)
                  .send(`Successfully updated cookieFlavor with id ${id}`)
            : res.status(304).send(`cookieFlavor with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cookieFlavorRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cookieFlavors!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(
                `Successfully removed cookieFlavor with id ${id}`
            );
        } else if (!result) {
            res.status(400).send(`Failed to remove cookieFlavor with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`cookieFlavor with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
