// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../../../services/database.service";
import CookieBase from "../../../models/CookieModel/CookieBaseModels/CookieBase";

// Global Config
export const cookieBaseRouter = express.Router();

cookieBaseRouter.use(express.json());

// GET
cookieBaseRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cookieBases = (await collections
            .cookieBases!.find({})
            .toArray()) as unknown as typeof CookieBase[];

        res.status(200).send(cookieBases);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cookieBaseRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cookieBase = (await collections.cookieBases!.findOne(
            query
        )) as unknown as typeof CookieBase;

        if (cookieBase) {
            res.status(200).send(cookieBase);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cookieBaseRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newcookieBase = req.body as typeof CookieBase;
        const result = await collections.cookieBases!.insertOne(newcookieBase);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cookieBase with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cookieBase.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cookieBaseRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedcookieBase: typeof CookieBase =
            req.body as typeof CookieBase;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cookieBases!.updateOne(query, {
            $set: updatedcookieBase,
        });

        result
            ? res
                  .status(200)
                  .send(`Successfully updated cookieBase with id ${id}`)
            : res.status(304).send(`cookieBase with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cookieBaseRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cookieBases!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(
                `Successfully removed cookieBase with id ${id}`
            );
        } else if (!result) {
            res.status(400).send(`Failed to remove cookieBase with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`cookieBase with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
