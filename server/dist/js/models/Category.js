"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    cake: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Cake",
        required: false,
    },
    cupcake: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Cupcake",
        required: false,
    },
    cookie: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Cookie",
        required: false,
    },
});
exports.default = (0, mongoose_1.model)("Category", categorySchema);
