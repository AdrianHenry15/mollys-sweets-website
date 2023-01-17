import { Products } from "../constants/Types";

export interface IProductStore {
    products: Products;
    carts: [];
    currentCart: [];
}
