"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    cookieBase: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CookieBase",
        require: true,
    },
    cookieFlavor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CookieFlavor",
        require: true,
    },
});
exports.default = (0, mongoose_1.model)("Cookie", cookieSchema);
