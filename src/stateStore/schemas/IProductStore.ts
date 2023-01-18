import { Products } from "../constants/Types";

export interface IProductStore {
    products: IProductTypes;
    carts: [];
    currentCart: [];
}

export interface IProductTypes {
    flavors: Products;
    frostings: Products;
    fillings: Products;
    cookies: Products;
    fruit: Products;
    sizes: IProductSizes;
    tiers: Products;
}

export interface IProductSizes {
    roundSizes: Products;
    sheetSizes: Products;
    cupcake_cookie_sizes: Products;
}
