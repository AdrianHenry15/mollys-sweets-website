import { Document } from "mongoose";

export interface ICookieFrosting extends Document {
    hasFrosting: boolean;
    name: string;
    price: number;
}
