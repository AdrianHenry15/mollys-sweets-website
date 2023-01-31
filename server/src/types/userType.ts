import { Document } from "mongoose";
import { ICart } from "./cartType";
import { IOrder } from "./orderType";
import { IProduct } from "./productType";

export interface IUser extends Document {
    id: number;
    firstName: string;
    lastName: string;
    image_url: string;
    email: string;
    password: string;
    isAdmin: boolean;
    orders: IOrder;
    cart: ICart;
    wishlist: IProduct;
}
