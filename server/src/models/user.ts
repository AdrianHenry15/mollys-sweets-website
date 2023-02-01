import { model, Schema } from "mongoose";
import { IUser } from "../types/userType";
import bcrypt from "bcrypt";

const userSchema: Schema = new Schema({
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
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    cart: [
        {
            product: { type: Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, min: 0 },
        },
    ],
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});

// set up pre-save middleware to create password
// * Hash the password befor it is beeing saved to the database

userSchema.pre(
    "save",
    function (this: IUser, next: (err?: Error | undefined) => void) {
        // * Make sure you don't hash the hash
        if (!this.isModified("password")) {
            return next();
        }
        const salt = 10;
        bcrypt.hash(this.password, salt, (err, hash: string) => {
            if (err) return next(err);
            this.password = hash;
        });
    }
);

userSchema.methods.comparePasswords = function (
    candidatePassword: string,
    user: IUser,
    next: (err: Error | null, same: boolean | null) => void
) {
    bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
        if (err) {
            return next(err, null);
        }
        next(null, isMatch);
    });
};

export default model<IUser>("User", userSchema);
