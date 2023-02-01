"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    image_url: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    orders: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    cart: [
        {
            product: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, min: 0 },
        },
    ],
    wishlist: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});
// set up pre-save middleware to create password
// * Hash the password befor it is beeing saved to the database
userSchema.pre("save", function (next) {
    // * Make sure you don't hash the hash
    if (!this.isModified("password")) {
        return next();
    }
    const salt = 10;
    bcrypt_1.default.hash(this.password, salt, (err, hash) => {
        if (err)
            return next(err);
        this.password = hash;
    });
});
userSchema.methods.comparePasswords = function (candidatePassword, user, next) {
    bcrypt_1.default.compare(candidatePassword, user.password, function (err, isMatch) {
        if (err) {
            return next(err, null);
        }
        next(null, isMatch);
    });
};
exports.default = (0, mongoose_1.model)("User", userSchema);
