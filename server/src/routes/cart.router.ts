// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Cart from "../models/Cart";

// Global Config
export const cartRouter = express.Router();

cartRouter.use(express.json());

// GET
cartRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const games = (await collections
            .carts!.find({})
            .toArray()) as typeof Cart[];

        res.status(200).send(games);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
cartRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const game = (await collections.carts!.findOne(query)) as typeof Cart;

        if (game) {
            res.status(200).send(game);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
cartRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newGame = req.body as typeof Cart;
        const result = await collections.carts!.insertOne(newGame);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new cart with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new cart.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
cartRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedCart: typeof Cart = req.body as typeof Cart;
        const query = { _id: new ObjectId(id) };

        const result = await collections.carts!.updateOne(query, {
            $set: updatedCart,
        });

        result
            ? res.status(200).send(`Successfully updated cart with id ${id}`)
            : res.status(304).send(`Game with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
cartRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.carts!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed cart with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove cart with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Cart with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
