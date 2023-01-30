// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Category from "../models/Category";

// Global Config
export const categoryRouter = express.Router();

categoryRouter.use(express.json());

// GET
categoryRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const categories = (await collections
            .categories!.find({})
            .toArray()) as typeof Category[];

        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send(Error.name);
    }
});

// GET by id
categoryRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const category = (await collections.categories!.findOne(
            query
        )) as typeof Category;

        if (category) {
            res.status(200).send(category);
        }
    } catch (error) {
        res.status(404).send(
            `Unable to find matching document with id: ${req.params.id}`
        );
    }
});

// POST
categoryRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newCategory = req.body as typeof Category;
        const result = await collections.categories!.insertOne(newCategory);

        result
            ? res
                  .status(201)
                  .send(
                      `Successfully created a new category with id ${result.insertedId}`
                  )
            : res.status(500).send("Failed to create a new category.");
    } catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
});

// PUT
categoryRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedCategory: typeof Category = req.body as typeof Category;
        const query = { _id: new ObjectId(id) };

        const result = await collections.categories!.updateOne(query, {
            $set: updatedCategory,
        });

        result
            ? res
                  .status(200)
                  .send(`Successfully updated category with id ${id}`)
            : res.status(304).send(`category with id: ${id} not updated`);
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});

// DELETE
categoryRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.categories!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed category with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove category with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`category with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
});
