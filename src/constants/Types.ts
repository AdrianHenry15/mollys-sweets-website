export type Products = {
    id: number;
    product: string[];
    productName: string;
    price: number;
    productQuantity?: string;
    productServes?: string;
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
