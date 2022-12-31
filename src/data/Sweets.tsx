import { specialCharMap } from "@testing-library/user-event/dist/keyboard";

// Cakes
const ChocolateCake = require("../assets/imgs/cakes/backdrop_cake.jpg");
const BlueberryRusticCake = require("../assets/imgs/cakes/blueberry-choclate-rustic.jpg");
const WeddingCake = require("../assets/imgs/cakes/wedding-cake-1.jpg");
const BerryCake = require("../assets/imgs/cakes/vanilla-chocolate-berry.jpg");

// Cupcakes
const Cupcake = require("../assets/imgs/cupcakes/backdrop_cupcake.jpg");

// Cookies
const ChocolateChip_Cookie = require("../assets/imgs/cookies/backdrop_cookie.jpg");

export const Sweets = {
    Cakes: [
        {
            id: 1,
            name: "Cherry Chocolate",
            description: "Chocolate Cake with Cherries",
            src: ChocolateCake,
        },
        {
            id: 2,
            name: "Cherry Chocolate",
            description: "Chocolate Cake with Cherries",
            src: BlueberryRusticCake,
        },
        {
            id: 3,
            name: "Cherry Chocolate",
            description: "Chocolate Cake with Cherries",
            src: WeddingCake,
        },
        {
            id: 4,
            name: "Cherry Chocolate",
            description: "Chocolate Cake with Cherries",
            src: BerryCake,
        },
    ],
    Cupcakes: [
        {
            id: 1,
            name: "Strawberry Vanilla",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Cupcake,
        },
    ],
    Cookies: [
        {
            id: 1,
            name: "Chocolate Chip",
            description: "This that cookie",
            src: ChocolateChip_Cookie,
        },
    ],
};

export enum SweetCategories {
    CAKES = "Cakes",
    CUPCAKES = "Cupcakes",
    COOKIES = "Cookies",
}
