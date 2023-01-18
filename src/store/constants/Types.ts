import { ProductTypes } from "./Enums";

export type Products = {
    id: number;
    product: ProductTypes;
    productName: string;
    price: number;
    productSize?: string;
    productQuantity?: string;
    productServes?: string;
    cakeShape?: string;
    cakeTier?: string;
}[];

export type ProductSize = {
    product: string;
    id: number;
    size: string;
    amountOfPeople: string;
    price: number;
}[];

export type SnackType = {
    id: number;
    count: string;
    amountOfPeople: string;
    price: number;
}[];

export type SweetGenres = {
    id: number;
    name: string;
    price: number;
}[];

export type SizeType = {
    id: number;
    size: string;
    amountOfPeople: string;
    price: number;
}[];
