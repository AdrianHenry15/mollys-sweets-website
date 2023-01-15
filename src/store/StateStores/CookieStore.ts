//frameworks
import { types } from "mobx-state-tree";
//models
import { CakeFlavorModel } from "../models/CakeModels/CakeFlavorModel";
import { CakeFrostingModel } from "../models/CakeModels/CakeFrostingModel";
import { CakeSizeModel } from "../models/CakeModels/CakeSizeModel";

export const Cookie = types.model("Cake", {
    flavor: types.array(CakeFlavorModel),
    frosting: types.array(CakeFrostingModel),
    size: types.array(CakeSizeModel),
});

export const CookieStore = types.model("CookieStore", {
    cookies: types.array(Cookie),
});

let _cookieStore: any;
export const useCookieStore = () => {
    if (!_cookieStore) {
        _cookieStore = CookieStore.create({
            cookies: [],
        });
    }

    return _cookieStore;
};
