"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cakeSchema = new mongoose_1.Schema({
    cakeBase: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CakeBase",
        require: true,
    },
    cakeFlavor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CakeFlavorMain",
        require: true,
    },
});
exports.default = (0, mongoose_1.model)("Cake", cakeSchema);
