import { types } from "mobx-state-tree";

export const CakeFrostingModel = types.model("CakeFrostingModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});
