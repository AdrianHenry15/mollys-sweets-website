//frameworks
import { types } from "mobx-state-tree";
//models
import { CakeFlavorModel } from "../models/CakeModels/CakeFlavorModel";
import { CakeFrostingModel } from "../models/CakeModels/CakeFrostingModel";
import { CakeSizeModel } from "../models/CakeModels/CakeSizeModel";

export const Cupcake = types.model("Cake", {
    flavor: types.array(CakeFlavorModel),
    frosting: types.array(CakeFrostingModel),
    size: types.array(CakeSizeModel),
});

export const CupcakeStore = types.model("CupcakeStore", {
    cupcakes: types.array(Cupcake),
});

let _cupcakeStore: any;
export const useCakeStore = () => {
    if (!_cupcakeStore) {
        _cupcakeStore = CupcakeStore.create({
            cupcakes: [],
        });
    }

    return _cupcakeStore;
};
