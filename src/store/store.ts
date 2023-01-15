import { types } from "mobx-state-tree";
import { makeAutoObservable } from "mobx";
import { Cake } from "./StateStores/CakeStore";
import { Cookie } from "./StateStores/CookieStore";
import { Cupcake } from "./StateStores/CupcakeStore";

export const Store = types.model("Store", {
    cakes: types.array(Cake),
    cupcakes: types.array(Cupcake),
    cookies: types.array(Cookie),
});
