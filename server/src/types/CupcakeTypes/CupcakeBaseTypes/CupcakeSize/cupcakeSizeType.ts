import { Document } from "mongoose";
import { IMiniSize } from "../../../CookieTypes/CookieBaseTypes/CookieSize/miniSize";
import { IRegularSize } from "../../../CookieTypes/CookieBaseTypes/CookieSize/regularSize";

export interface ICupcakeSize extends Document {
    id: number;
    regular: IRegularSize;
    mini: IMiniSize;
    totalPrice: number;
}
