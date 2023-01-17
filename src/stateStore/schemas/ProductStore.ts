import { Products } from "../../constants/Types";

export interface ProductStore {
    products: Products;
    carts: [];
    currentCart: [];
}
