import { Document } from "mongoose";

export interface ISheetCake extends Document {
    id: number;
    isCakeShape: boolean;
}
