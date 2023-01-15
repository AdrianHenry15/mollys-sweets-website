import { types } from "mobx-state-tree";

export const CookieFrostingModel = types.model("CookieFrostingModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});
