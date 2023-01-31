import { Document } from "mongoose";
import { IMiniSize } from "./miniSize";
import { IRegularSize } from "./regularSize";

export interface ICookieSize extends Document {
    id: number;
    regular: IRegularSize;
    mini: IMiniSize;
    totalPrice: number;
}
