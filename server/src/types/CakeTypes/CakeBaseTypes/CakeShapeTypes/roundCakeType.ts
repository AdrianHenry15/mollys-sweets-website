import { Document } from "mongoose";

export interface IRoundCake extends Document {
    id: number;
    isCakeShape: boolean;
}
