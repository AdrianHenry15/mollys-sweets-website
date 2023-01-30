// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Cookie from "../models/Cookie";

// Global Config
export const cookieRouter = express.Router();

cookieRouter.use(express.json());

// GET
cookieRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const cookies = (await collections
            .cookies!.find({})
            .toArray()) as typeof Cookie[];

        res.status(200).send(cookies);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cookieRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const cookie = (await collections.cookies!.findOne(
            query
        )) as typeof Cookie;

        if (cookie) {
            res.status(200).send(cookie);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cookieRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newCookie = req.body as typeof Cookie;
        const result = await collections.cookies!.insertOne(newCookie);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cookie with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cookie.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cookieRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedCookie: typeof Cookie = req.body as typeof Cookie;
        const query = { _id: new ObjectId(id) };

        const result = await collections.cookies!.updateOne(query, {
            $set: updatedCookie,
        });

        result
            ? res.status(200).send(`Successfully updated cookie with id ${id}`)
            : res.status(304).send(`cookie with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cookieRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.cookies!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed cookie with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove cookie with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`cookie with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
