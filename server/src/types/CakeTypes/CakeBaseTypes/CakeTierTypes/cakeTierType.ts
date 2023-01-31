import { Document } from "mongoose";
import { IMultipleTier } from "./multipleTierType";
import { ISingleTier } from "./singleTierType";

export interface ICakeTier extends Document {
    id: number;
    singlerTier: ISingleTier;
    multipleTier: IMultipleTier;
}
