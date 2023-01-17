import { types } from "mobx-state-tree";

export const CakeFillingModel = types.model("CakeFillingModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});
