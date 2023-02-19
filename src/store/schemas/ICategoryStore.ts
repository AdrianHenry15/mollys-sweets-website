import { ProductCategories } from "../constants/Enums";

export interface ICategory {
    cakeCategory: boolean;
    cookieCategory: boolean;
    cupcakeCategory: boolean;
    category: string;
    getCategory: (category: ProductCategories) => void;
}
