import { types } from "mobx-state-tree";

export const CakeFlavorModel = types.model("CakeFlavorModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});
