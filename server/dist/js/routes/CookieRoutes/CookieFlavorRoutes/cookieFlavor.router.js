"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieFlavorRouter = void 0;
// External Dependencies
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../../../services/database.service");
// Global Config
exports.cookieFlavorRouter = express_1.default.Router();
exports.cookieFlavorRouter.use(express_1.default.json());
// GET
exports.cookieFlavorRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cookieFlavors = (yield database_service_1.collections
            .cookieFlavors.find({})
            .toArray());
        res.status(200).send(cookieFlavors);
    }
    catch (error) {
        res.status(500).send(Error.name);
    }
}));
// GET by id
exports.cookieFlavorRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const cookieFlavor = (yield database_service_1.collections.cookieFlavors.findOne(query));
        if (cookieFlavor) {
            res.status(200).send(cookieFlavor);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
}));
// POST
exports.cookieFlavorRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newcookieFlavor = req.body;
        const result = yield database_service_1.collections.cookieFlavors.insertOne(newcookieFlavor);
        result
            ? res
                .status(201)
                .send(`Successfully created a new cookieFlavor with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new cookieFlavor.");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
}));
// PUT
exports.cookieFlavorRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    try {
        const updatedcookieFlavor = req.body;
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.cookieFlavors.updateOne(query, {
            $set: updatedcookieFlavor,
        });
        result
            ? res
                .status(200)
                .send(`Successfully updated cookieFlavor with id ${id}`)
            : res.status(304).send(`cookieFlavor with id: ${id} not updated`);
    }
    catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
}));
// DELETE
exports.cookieFlavorRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.cookieFlavors.deleteOne(query);
        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed cookieFlavor with id ${id}`);
        }
        else if (!result) {
            res.status(400).send(`Failed to remove cookieFlavor with id ${id}`);
        }
        else if (!result.deletedCount) {
            res.status(404).send(`cookieFlavor with id ${id} does not exist`);
        }
    }
    catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
}));
