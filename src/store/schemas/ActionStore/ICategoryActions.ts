import { ProductCategories } from "../../constants/Enums";

export interface ICategoryActions {
    getCategory: (category: ProductCategories) => void;
}
