import { observable } from "mobx";
import {
    ProductSizes,
    CakeTiers,
    CakeShapes,
    ProductTypes,
} from "./constants/Enums";
import { IProductStore } from "./schemas/IProductStore";

export class GlobalStateStore {
    constructor(base?: Partial<GlobalStateStore>) {
        Object.assign(this, base);
    }

    @observable ProductStore: IProductStore = {
        products: {
            flavors: [
                //cake FLAVOR
                {
                    id: 0,
                    product: ProductTypes.NONE,
                    productName: "",
                    price: 0,
                },

                {
                    id: 16,
                    product: ProductTypes.FLAVOR,
                    productName: "Vanilla Bean",
                    price: 2.75,
                },
                {
                    id: 17,
                    product: ProductTypes.FLAVOR,
                    productName: "Almond",
                    price: 2.75,
                },
                {
                    id: 18,
                    product: ProductTypes.FLAVOR,
                    productName: "Carrot",
                    price: 2.75,
                },
                {
                    id: 19,
                    product: ProductTypes.FLAVOR,
                    productName: "Coconut",
                    price: 2.75,
                },
                {
                    id: 20,
                    product: ProductTypes.FLAVOR,
                    productName: "Chocolate Earthquake",
                    price: 2.75,
                },
                {
                    id: 21,
                    product: ProductTypes.FLAVOR,
                    productName: "Strawberry Champagne",
                    price: 2.75,
                },
                {
                    id: 22,
                    product: ProductTypes.FLAVOR,
                    productName: "Red Velvet",
                    price: 2.75,
                },
                {
                    id: 23,
                    product: ProductTypes.FLAVOR,
                    productName: "Chocolate",
                    price: 2.75,
                },
                {
                    id: 24,
                    product: ProductTypes.FLAVOR,
                    productName: "Birthday",
                    price: 2.75,
                },
                {
                    id: 25,
                    product: ProductTypes.FLAVOR,
                    productName: "Oreo",
                    price: 2.75,
                },
                {
                    id: 26,
                    product: ProductTypes.FLAVOR,
                    productName: "Brown Butter",
                    price: 2.75,
                },
                {
                    id: 27,
                    product: ProductTypes.FLAVOR,
                    productName: "Lemon",
                    price: 2.75,
                },
            ],
            frostings: [
                //FROSTING
                {
                    id: 0,
                    product: ProductTypes.NONE,
                    productName: "",
                    price: 0,
                },
                {
                    id: 36,
                    product: ProductTypes.FROSTING,
                    productName: "Swiss Buttercream",
                    price: 2.75,
                },
                {
                    id: 37,
                    product: ProductTypes.FROSTING,
                    productName: "Cream Cheese Buttercream",
                    price: 2.75,
                },
                {
                    id: 38,
                    product: ProductTypes.FROSTING,
                    productName: "Buttercream",
                    price: 2.75,
                },
            ],
            fillings: [
                //FILLING
                {
                    id: 0,
                    product: ProductTypes.NONE,
                    productName: "",
                    price: 0,
                },
                {
                    id: 28,
                    product: ProductTypes.FILLING,
                    productName: "Blueberry Jam",
                    price: 2.75,
                },
                {
                    id: 29,
                    product: ProductTypes.FILLING,
                    productName: "Strawberry Jam",
                    price: 2.75,
                },
                {
                    id: 30,
                    product: ProductTypes.FILLING,
                    productName: "Ganache",
                    price: 2.75,
                },
                {
                    id: 31,
                    product: ProductTypes.FILLING,
                    productName: "Vanilla Mousse",
                    price: 2.75,
                },
                {
                    id: 32,
                    product: ProductTypes.FILLING,
                    productName: "Strawberry Mousse",
                    price: 2.75,
                },
                {
                    id: 33,
                    product: ProductTypes.FILLING,
                    productName: "Peanut Butter Mousse",
                    price: 2.75,
                },
                {
                    id: 34,
                    product: ProductTypes.FILLING,
                    productName: "Boston Cream",
                    price: 2.75,
                },
                {
                    id: 35,
                    product: ProductTypes.FILLING,
                    productName: "Fresh Fruit",
                    price: 2.75,
                },
            ],
            cookies: [
                //cookie flavor
                {
                    id: 0,
                    product: ProductTypes.NONE,
                    productName: "",
                    price: 0,
                },
                {
                    id: 49,
                    product: ProductTypes.COOKIE,
                    productName: "Chocolate Chip",
                    price: 2.75,
                },
                {
                    id: 50,
                    product: ProductTypes.COOKIE,
                    productName: "Sugar Cookie",
                    price: 2.75,
                },
                {
                    id: 51,
                    product: ProductTypes.COOKIE,
                    productName: "Peanut Butter",
                    price: 2.75,
                },
                {
                    id: 52,
                    product: ProductTypes.COOKIE,
                    productName: "Oatmeal Raisin",
                    price: 2.75,
                },
                {
                    id: 53,
                    product: ProductTypes.COOKIE,
                    productName: "Snickerdoodle",
                    price: 2.75,
                },
                {
                    id: 54,
                    product: ProductTypes.COOKIE,
                    productName: "Dark Chocolate",
                    price: 2.75,
                },
                {
                    id: 55,
                    product: ProductTypes.COOKIE,
                    productName: "Red Velvet",
                    price: 2.75,
                },
                {
                    id: 56,
                    product: ProductTypes.COOKIE,
                    productName: "Birthday Cake",
                    price: 2.75,
                },
                {
                    id: 57,
                    product: ProductTypes.COOKIE,
                    productName: "Brownie",
                    price: 2.75,
                },
                {
                    id: 58,
                    product: ProductTypes.COOKIE,
                    productName: "Oreo",
                    price: 2.75,
                },
                {
                    id: 59,
                    product: ProductTypes.COOKIE,
                    productName: "Coconut",
                    price: 2.75,
                },
            ],
            fruit: [
                // fruits
                {
                    id: 0,
                    product: ProductTypes.NONE,
                    productName: "",
                    price: 0,
                },
                {
                    id: 1,
                    product: ProductTypes.FRUIT,
                    productName: "Banana",
                    price: 2.75,
                },
                {
                    id: 2,
                    product: ProductTypes.FRUIT,
                    productName: "Apple",
                    price: 2.75,
                },
                {
                    id: 3,
                    product: ProductTypes.FRUIT,
                    productName: "Blueberry",
                    price: 2.75,
                },
                {
                    id: 4,
                    product: ProductTypes.FRUIT,
                    productName: "Strawberry",
                    price: 2.75,
                },
            ],
            sizes: {
                sheetSizes: [
                    // sheetsizes
                    {
                        id: 0,
                        product: ProductTypes.NONE,
                        productName: "",
                        price: 0,
                    },
                    {
                        id: 5,
                        product: ProductTypes.CAKE,
                        productName: "Size",
                        productSize: "1/4",
                        price: 2.75,
                        productServes: "28 People",
                        cakeShape: CakeShapes.SHEET,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 6,
                        product: ProductTypes.CAKE,
                        productName: "Size",
                        productSize: "1/2",
                        price: 2.75,
                        productServes: "48 People",
                        cakeShape: CakeShapes.SHEET,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 7,
                        product: ProductTypes.CAKE,
                        productName: "Size",
                        productSize: "FULL",
                        price: 2.75,
                        productServes: "98 People",
                        cakeShape: CakeShapes.SHEET,
                        cakeTier: CakeTiers.SINGLE,
                    },
                ],
                roundSizes: [
                    //roundsizes
                    {
                        id: 0,
                        product: ProductTypes.NONE,
                        productName: "",
                        price: 0,
                    },
                    {
                        id: 8,
                        product: ProductTypes.CAKE,
                        productName: `Size`,
                        productSize: `6"`,
                        price: 2.75,
                        productServes: "6-8 People",
                        cakeShape: CakeShapes.ROUND,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 9,
                        product: ProductTypes.CAKE,
                        productName: `Size`,
                        productSize: `7"`,
                        price: 2.75,
                        productServes: "10-12 People",
                        cakeShape: CakeShapes.ROUND,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 10,
                        product: ProductTypes.CAKE,
                        productName: `Size`,
                        productSize: `8"`,
                        price: 2.75,
                        productServes: "10-18 People",
                        cakeShape: CakeShapes.ROUND,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 11,
                        product: ProductTypes.CAKE,
                        productName: `Size`,
                        productSize: `9"`,
                        price: 2.75,
                        productServes: "20-24 People",
                        cakeShape: CakeShapes.ROUND,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 12,
                        product: ProductTypes.CAKE,
                        productName: `Size`,
                        productSize: `10"`,
                        price: 2.75,
                        productServes: "26-35 People",
                        cakeShape: CakeShapes.ROUND,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 13,
                        product: ProductTypes.CAKE,
                        productName: `Size`,
                        productSize: `12"`,
                        price: 2.75,
                        productServes: "35-48 People",
                        cakeShape: CakeShapes.ROUND,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 14,
                        product: ProductTypes.CAKE,
                        productName: `Size`,
                        productSize: `14"`,
                        price: 2.75,
                        productServes: "50-65 People",
                        cakeShape: CakeShapes.ROUND,
                        cakeTier: CakeTiers.SINGLE,
                    },
                    {
                        id: 15,
                        product: ProductTypes.CAKE,
                        productName: `Size`,
                        productSize: `16"`,
                        price: 2.75,
                        productServes: "70-85 People",
                        cakeShape: CakeShapes.ROUND,
                        cakeTier: CakeTiers.SINGLE,
                    },
                ],
                cupcake_cookie_sizes: {
                    regular: [
                        // Regular cupcake/cookie count
                        {
                            id: 0,
                            product: ProductTypes.NONE,
                            productName: "",
                            price: 0,
                            productQuantity: "",
                            productServes: "",
                        },
                        {
                            id: 39,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.REGULAR,
                            price: 20.0,
                            productQuantity: "12",
                            productServes: "12 People",
                        },
                        {
                            id: 40,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.REGULAR,
                            price: 40.0,
                            productQuantity: "24",
                            productServes: "24 People",
                        },
                        {
                            id: 41,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.REGULAR,
                            price: 60.0,
                            productQuantity: "36",
                            productServes: "36 People",
                        },
                        {
                            id: 42,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.REGULAR,
                            price: 80.0,
                            productQuantity: "48",
                            productServes: "48 People",
                        },
                        {
                            id: 43,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.REGULAR,
                            price: 0.0,
                            productQuantity: "More",
                            productServes: "More Than 48 People",
                        },
                    ],
                    mini: [
                        // mini cupcake/cookie count
                        {
                            id: 0,
                            product: ProductTypes.NONE,
                            productName: "",
                            price: 0,
                            productQuantity: "",
                            productServes: "",
                        },
                        {
                            id: 44,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.MINI,
                            price: 10.0,
                            productQuantity: "12",
                            productServes: "12 People",
                        },
                        {
                            id: 45,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.MINI,
                            price: 20.0,
                            productQuantity: "24",
                            productServes: "24 People",
                        },
                        {
                            id: 46,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.MINI,
                            price: 30.0,
                            productQuantity: "36",
                            productServes: "36 People",
                        },
                        {
                            id: 47,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.MINI,
                            price: 40.0,
                            productQuantity: "48",
                            productServes: "48 People",
                        },
                        {
                            id: 48,
                            product:
                                ProductTypes.CUPCAKE || ProductTypes.COOKIE,
                            productName: `Size`,
                            productSize: ProductSizes.MINI,
                            price: 0.0,
                            productQuantity: "More",
                            productServes: "More Than 48 People",
                        },
                    ],
                },
            },
            tiers: [
                //tier
                {
                    id: 0,
                    product: ProductTypes.NONE,
                    productName: "",
                    price: 0,
                },
                {
                    id: 61,
                    product: ProductTypes.TIER,
                    productName: CakeTiers.SINGLE,
                    price: 5.0,
                },
                {
                    id: 61,
                    product: ProductTypes.TIER,
                    productName: CakeTiers.MULTIPLE,
                    price: 5.0,
                },
            ],
        },
        carts: [],
        currentCart: [],
    };
}

export const globalStore = new GlobalStateStore();
