import { ProductCategories } from "../constants/Enums";

export interface ICategory {
    category: string;
    getCategory: (category: ProductCategories) => void;
}
