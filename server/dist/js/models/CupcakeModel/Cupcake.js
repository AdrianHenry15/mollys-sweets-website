"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cupcakeSchema = new mongoose_1.Schema({
    cupcakeBase: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CupcakeBase",
        require: true,
    },
    cupcakeFlavor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CupcakeFlavorMain",
        require: true,
    },
});
exports.default = (0, mongoose_1.model)("Cupcake", cupcakeSchema);
