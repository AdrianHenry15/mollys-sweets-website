import { observable } from "mobx";
import { ProductTypes } from "./constants/Enums";
import { IProductStore } from "./schemas/IProductStore";

export class GlobalStateStore {
    constructor(base?: Partial<GlobalStateStore>) {
        Object.assign(this, base);
    }

    @observable ProductStore: IProductStore = {
        products: [
            //no product
            {
                id: 0,
                product: [ProductTypes.NONE],
                productName: "",
                price: 0,
            },
            // fruits
            {
                id: 1,
                product: [ProductTypes.FRUIT],
                productName: "Banana",
                price: 2.75,
            },
            {
                id: 2,
                product: [ProductTypes.FRUIT],
                productName: "Apple",
                price: 2.75,
            },
            {
                id: 3,
                product: [ProductTypes.FRUIT],
                productName: "Blueberry",
                price: 2.75,
            },
            {
                id: 4,
                product: [ProductTypes.FRUIT],
                productName: "Strawberry",
                price: 2.75,
            },
            // sheetsizes
            {
                id: 5,
                product: [ProductTypes.SHEET],
                productName: "1/4",
                price: 2.75,
                productServes: "28 People",
            },
            {
                id: 6,
                product: [ProductTypes.SHEET],
                productName: "1/2",
                price: 2.75,
                productServes: "48 People",
            },
            {
                id: 7,
                product: [ProductTypes.SHEET],
                productName: "FULL",
                price: 2.75,
                productServes: "98 People",
            },
            //roundsizes
            {
                id: 8,
                product: [ProductTypes.ROUND],
                productName: `6"`,
                price: 2.75,
                productServes: "6-8 People",
            },
            {
                id: 9,
                product: [ProductTypes.ROUND],
                productName: `7"`,
                price: 2.75,
                productServes: "10-12 People",
            },
            {
                id: 10,
                product: [ProductTypes.ROUND],
                productName: `8"`,
                price: 2.75,
                productServes: "10-18 People",
            },
            {
                id: 11,
                product: [ProductTypes.ROUND],
                productName: `9"`,
                price: 2.75,
                productServes: "20-24 People",
            },
            {
                id: 12,
                product: [ProductTypes.ROUND],
                productName: `10"`,
                price: 2.75,
                productServes: "26-35 People",
            },
            {
                id: 13,
                product: [ProductTypes.ROUND],
                productName: `12"`,
                price: 2.75,
                productServes: "35-48 People",
            },
            {
                id: 14,
                product: [ProductTypes.ROUND],
                productName: `14"`,
                price: 2.75,
                productServes: "50-65 People",
            },
            {
                id: 15,
                product: [ProductTypes.ROUND],
                productName: `16"`,
                price: 2.75,
                productServes: "70-85 People",
            },
            //cake FLAVOR
            {
                id: 16,
                product: [ProductTypes.FLAVOR],
                productName: "Vanilla Bean",
                price: 2.75,
            },
            {
                id: 17,
                product: [ProductTypes.FLAVOR],
                productName: "Almond",
                price: 2.75,
            },
            {
                id: 18,
                product: [ProductTypes.FLAVOR],
                productName: "Carrot",
                price: 2.75,
            },
            {
                id: 19,
                product: [ProductTypes.FLAVOR],
                productName: "Coconut",
                price: 2.75,
            },
            {
                id: 20,
                product: [ProductTypes.FLAVOR],
                productName: "Chocolate Earthquake",
                price: 2.75,
            },
            {
                id: 21,
                product: [ProductTypes.FLAVOR],
                productName: "Strawberry Champagne",
                price: 2.75,
            },
            {
                id: 22,
                product: [ProductTypes.FLAVOR],
                productName: "Red Velvet",
                price: 2.75,
            },
            {
                id: 23,
                product: [ProductTypes.FLAVOR],
                productName: "Chocolate",
                price: 2.75,
            },
            {
                id: 24,
                product: [ProductTypes.FLAVOR],
                productName: "Birthday",
                price: 2.75,
            },
            {
                id: 25,
                product: [ProductTypes.FLAVOR],
                productName: "Oreo",
                price: 2.75,
            },
            {
                id: 26,
                product: [ProductTypes.FLAVOR],
                productName: "Brown Butter",
                price: 2.75,
            },
            {
                id: 27,
                product: [ProductTypes.FLAVOR],
                productName: "Lemon",
                price: 2.75,
            },
            //FILLING
            {
                id: 28,
                product: [ProductTypes.FILLING],
                productName: "Blueberry Jam",
                price: 2.75,
            },
            {
                id: 29,
                product: [ProductTypes.FILLING],
                productName: "Strawberry Jam",
                price: 2.75,
            },
            {
                id: 30,
                product: [ProductTypes.FILLING],
                productName: "Ganache",
                price: 2.75,
            },
            {
                id: 31,
                product: [ProductTypes.FILLING],
                productName: "Vanilla Mousse",
                price: 2.75,
            },
            {
                id: 32,
                product: [ProductTypes.FILLING],
                productName: "Strawberry Mousse",
                price: 2.75,
            },
            {
                id: 33,
                product: [ProductTypes.FILLING],
                productName: "Peanut Butter Mousse",
                price: 2.75,
            },
            {
                id: 34,
                product: [ProductTypes.FILLING],
                productName: "Boston Cream",
                price: 2.75,
            },
            {
                id: 35,
                product: [ProductTypes.FILLING],
                productName: "Fresh Fruit",
                price: 2.75,
            },
            //FROSTING
            {
                id: 36,
                product: [ProductTypes.FROSTING],
                productName: "Swiss Buttercream",
                price: 2.75,
            },
            {
                id: 37,
                product: [ProductTypes.FROSTING],
                productName: "Cream Cheese Buttercream",
                price: 2.75,
            },
            {
                id: 38,
                product: [ProductTypes.FROSTING],
                productName: "Buttercream",
                price: 2.75,
            },
            // Regular cupcake/cookie count
            {
                id: 39,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Regular",
                price: 20.0,
                productQuantity: "12",
                productServes: "12 People",
            },
            {
                id: 40,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Regular",
                price: 40.0,
                productQuantity: "24",
                productServes: "24 People",
            },
            {
                id: 41,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Regular",
                price: 60.0,
                productQuantity: "36",
                productServes: "36 People",
            },
            {
                id: 42,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Regular",
                price: 80.0,
                productQuantity: "48",
                productServes: "48 People",
            },
            {
                id: 43,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Regular",
                price: 0.0,
                productQuantity: "More",
            },
            // mini cupcake/cookie count
            {
                id: 44,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Mini",
                price: 10.0,
                productQuantity: "12",
                productServes: "12 People",
            },
            {
                id: 45,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Mini",
                price: 20.0,
                productQuantity: "24",
                productServes: "24 People",
            },
            {
                id: 46,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Mini",
                price: 30.0,
                productQuantity: "36",
                productServes: "36 People",
            },
            {
                id: 47,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Mini",
                price: 40.0,
                productQuantity: "48",
                productServes: "48 People",
            },
            {
                id: 48,
                product: [ProductTypes.CUPCAKE, ProductTypes.COOKIE],
                productName: "Mini",
                price: 0.0,
                productQuantity: "More",
            },
            //cookie flavor
            {
                id: 49,
                product: [ProductTypes.COOKIE],
                productName: "Chocolate Chip",
                price: 2.75,
            },
            {
                id: 50,
                product: [ProductTypes.COOKIE],
                productName: "Sugar Cookie",
                price: 2.75,
            },
            {
                id: 51,
                product: [ProductTypes.COOKIE],
                productName: "Peanut Butter",
                price: 2.75,
            },
            {
                id: 52,
                product: [ProductTypes.COOKIE],
                productName: "Oatmeal Raisin",
                price: 2.75,
            },
            {
                id: 53,
                product: [ProductTypes.COOKIE],
                productName: "Snickerdoodle",
                price: 2.75,
            },
            {
                id: 54,
                product: [ProductTypes.COOKIE],
                productName: "Dark Chocolate",
                price: 2.75,
            },
            {
                id: 55,
                product: [ProductTypes.COOKIE],
                productName: "Red Velvet",
                price: 2.75,
            },
            {
                id: 56,
                product: [ProductTypes.COOKIE],
                productName: "Birthday Cake",
                price: 2.75,
            },
            {
                id: 57,
                product: [ProductTypes.COOKIE],
                productName: "Brownie",
                price: 2.75,
            },
            {
                id: 58,
                product: [ProductTypes.COOKIE],
                productName: "Oreo",
                price: 2.75,
            },
            {
                id: 59,
                product: [ProductTypes.COOKIE],
                productName: "Coconut",
                price: 2.75,
            },
            {
                id: 60,
                product: [ProductTypes.COOKIE],
                productName: "Drop COOKIE",
                price: 2.75,
            },
            //tier
            {
                id: 61,
                product: [ProductTypes.TIER],
                productName: "Single",
                price: 5.0,
            },
        ],
        carts: [],
        currentCart: [],
    };
}
