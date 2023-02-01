"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieFlavorMainSchema = new mongoose_1.Schema({
    flavor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CookieFlavor",
        require: true,
    },
    frosting: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CookieFrosting",
        require: true,
    },
});
exports.default = (0, mongoose_1.model)("CookieFlavorMain", cookieFlavorMainSchema);
