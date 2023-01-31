import { Document } from "mongoose";
import { ICakeShape } from "./CakeShapeTypes/cakeShapeType";
import { ICakeSize } from "./CakeSizeTypes/cakeSizeType";
import { ICakeTier } from "./CakeTierTypes/cakeTierType";

export interface ICakeBase extends Document {
    id: number;
    tier: ICakeTier;
    shape: ICakeShape;
    size: ICakeSize;
    totalPrice: number;
}
