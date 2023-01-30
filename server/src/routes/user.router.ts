// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import User from "../models/User";

// Global Config
export const userRouter = express.Router();

userRouter.use(express.json());

// GET
userRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const users = (await collections
            .users!.find({})
            .toArray()) as typeof User[];

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
userRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const user = (await collections.users!.findOne(query)) as typeof User;

        if (user) {
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
userRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newUser = req.body as typeof User;
        const result = await collections.users!.insertOne(newUser);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new user with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new user.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
userRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedUser: typeof User = req.body as typeof User;
        const query = { _id: new ObjectId(id) };

        const result = await collections.users!.updateOne(query, {
            $set: updatedUser,
        });

        result
            ? res.status(200).send(`Successfully updated user with id ${id}`)
            : res.status(304).send(`user with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
userRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.users!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed user with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove user with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`user with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
