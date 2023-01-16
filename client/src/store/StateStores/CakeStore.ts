//frameworks
import { types } from "mobx-state-tree";
//models
import { CakeFillingModel } from "../models/CakeModels/CakeFillingModel";
import { CakeFlavorModel } from "../models/CakeModels/CakeFlavorModel";
import { CakeFrostingModel } from "../models/CakeModels/CakeFrostingModel";
import { CakeSizeModel } from "../models/CakeModels/CakeSizeModel";
import { CakeTierModel } from "../models/CakeModels/CakeTierModel";

export const Cake = types.model("Cake", {
    flavor: types.array(CakeFlavorModel),
    filling: types.array(CakeFillingModel),
    frosting: types.array(CakeFrostingModel),
    size: types.array(CakeSizeModel),
    tier: types.array(CakeTierModel),
});

export const CakeStore = types.model("CakeStore", {
    cakes: types.array(Cake),
});

let _cakeStore: any;
export const useCakeStore = () => {
    if (!_cakeStore) {
        _cakeStore = CakeStore.create({
            cakes: [],
        });
    }

    return _cakeStore;
};
