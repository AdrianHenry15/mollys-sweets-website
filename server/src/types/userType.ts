import { Document } from "mongoose";

export interface IUser extends Document {
    id: number;
    firstName: string;
    lastName: string;
    image_url: string;
    email: string;
    password: string;
    isAdmin: boolean;
    orders: string;
    cart: string;
    wishlist: string;
}
