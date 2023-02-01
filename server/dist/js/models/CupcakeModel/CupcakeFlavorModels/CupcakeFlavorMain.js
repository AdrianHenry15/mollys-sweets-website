"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cupcakeFlavorMainSchema = new mongoose_1.Schema({
    flavor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CupcakeFlavorMain",
        required: true,
    },
    frosting: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CupcakeFrosting",
        required: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CupcakeFlavorMain", cupcakeFlavorMainSchema);
