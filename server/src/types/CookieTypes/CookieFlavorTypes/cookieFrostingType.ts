import { Document } from "mongoose";

export interface ICookieFrosting extends Document {
    id: number;
    hasFrosting: boolean;
    name: string;
    totalPrice: number;
}
