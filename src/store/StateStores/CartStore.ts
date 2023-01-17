//models
import { Cake } from "./CakeStore";
//frameworks
import { types } from "mobx-state-tree";
import { Cupcake } from "./CupcakeStore";
import { Cookie } from "./CookieStore";

const CartEntry = types.model("CartEntry", {
    cakeQuantity: 0,
    cupcakeQuantity: 0,
    cookieQuantity: 0,
    cakes: types.reference(Cake),
    cookies: types.reference(Cookie),
    cupcakes: types.reference(Cupcake),
});
