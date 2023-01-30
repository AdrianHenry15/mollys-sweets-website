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
exports.orderRouter = void 0;
// External Dependencies
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
// Global Config
exports.orderRouter = express_1.default.Router();
exports.orderRouter.use(express_1.default.json());
// GET
exports.orderRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = (yield database_service_1.collections
            .orders.find({})
            .toArray());
        res.status(200).send(orders);
    }
    catch (error) {
        res.status(500).send(Error.name);
    }
}));
// GET by id
exports.orderRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const order = (yield database_service_1.collections.orders.findOne(query));
        if (order) {
            res.status(200).send(order);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
}));
// POST
exports.orderRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = req.body;
        const result = yield database_service_1.collections.orders.insertOne(newOrder);
        result
            ? res
                .status(201)
                .send(`Successfully created a new order with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new order.");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(Error);
    }
}));
// PUT
exports.orderRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    try {
        const updatedOrder = req.body;
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.orders.updateOne(query, {
            $set: updatedOrder,
        });
        result
            ? res.status(200).send(`Successfully updated order with id ${id}`)
            : res.status(304).send(`order with id: ${id} not updated`);
    }
    catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
}));
// DELETE
exports.orderRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.orders.deleteOne(query);
        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed order with id ${id}`);
        }
        else if (!result) {
            res.status(400).send(`Failed to remove order with id ${id}`);
        }
        else if (!result.deletedCount) {
            res.status(404).send(`order with id ${id} does not exist`);
        }
    }
    catch (error) {
        console.error(Error);
        res.status(400).send(Error);
    }
}));
