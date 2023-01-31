import { ICakeBase } from "./CakeBaseInterfaces/cakeBase";
import {
    ICakeFlavor,
    ICakeFlavorMain,
} from "./CakeFlavorInterfaces/cakeFlavorMain";

export interface ICake {
    cakeBase: ICakeBase;
    cakeFlavor: ICakeFlavorMain;
}
