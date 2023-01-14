import { CupcakeSize } from "./Enums";

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

export type CupcakeType = {
    id: number;
    count: string;
    amountOfPeople: string;
    price: number;
}[];
