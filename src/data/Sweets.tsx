// Cakes
const MainCake = require("../assets/imgs/cakes/main-cake.jpg");
const ChocolateCake = require("../assets/imgs/cakes/backdrop_cake.jpg");
const BlueberryRusticCake = require("../assets/imgs/cakes/blueberry-choclate-rustic.jpg");
const WeddingCake = require("../assets/imgs/cakes/wedding-cake-1.jpg");
const BerryCake = require("../assets/imgs/cakes/vanilla-chocolate-berry.jpg");
const BirthdayCake = require("../assets/imgs/cakes/happy_birthday_cake.jpg");

// Cupcakes
const Strawberry_Cupcake = require("../assets/imgs/cupcakes/backdrop_cupcake.jpg");
const Vanilla_Cupcake = require("../assets/imgs/cupcakes/cupcake-1.jpg");
const Chocolate_Cupcake = require("../assets/imgs/cupcakes/cupcake-2.jpg");
const Assortment_Cupcake = require("../assets/imgs/cupcakes/cupcake-variety.jpg");
const RedVelvet_Cupcake = require("../assets/imgs/cupcakes/red_velvet.jpg");
const Valentines_Cupcake = require("../assets/imgs/cupcakes/valentines.jpg");

// Cookies
const ChocolateChip_Cookie = require("../assets/imgs/cookies/backdrop_cookie.jpg");
const Cookie_Assortment = require("../assets/imgs/cookies/alot.jpg");
const Birthday_Cookie = require("../assets/imgs/cookies/birthday_cookie.jpg");
const Gooey_Chocolate_Chip_Cookie = require("../assets/imgs/cookies/gooey.jpg");
const Grandmas_Chocolate_Chip_Cookie = require("../assets/imgs/cookies/grandmas.jpg");
const Snickerdoodle_Cookie = require("../assets/imgs/cookies/snickerdoodle.jpg");

export const Sweets = {
    Cakes: [
        {
            id: 1,
            name: "Main Cake",
            description: "Chocolate Cake with Cherries",
            src: MainCake,
        },
        {
            id: 2,
            name: "Chocolate Cake",
            description: "Chocolate Cake with Cherries",
            src: ChocolateCake,
        },
        {
            id: 3,
            name: "Blueberry Rustic Cake",
            description: "Chocolate Cake with Cherries",
            src: BlueberryRusticCake,
        },
        {
            id: 4,
            name: "Wedding Cake",
            description: "Chocolate Cake with Cherries",
            src: WeddingCake,
        },
        {
            id: 5,
            name: "Berry Cake",
            description: "Chocolate Cake with Cherries",
            src: BerryCake,
        },
        {
            id: 6,
            name: "Birthday Cake",
            description: "Chocolate Cake with Cherries",
            src: BirthdayCake,
        },
    ],
    Cupcakes: [
        {
            id: 1,
            name: "Strawberry Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Strawberry_Cupcake,
        },
        {
            id: 2,
            name: "Vanilla Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Vanilla_Cupcake,
        },
        {
            id: 3,
            name: "Chocolate Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Chocolate_Cupcake,
        },
        {
            id: 4,
            name: "Assortment of Cupcakes",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Assortment_Cupcake,
        },
        {
            id: 5,
            name: "Red Velvet Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: RedVelvet_Cupcake,
        },
        {
            id: 6,
            name: "Valentine's Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Valentines_Cupcake,
        },
    ],
    Cookies: [
        {
            id: 1,
            name: "Chocolate Chip Cookie",
            description: "This that cookie",
            src: ChocolateChip_Cookie,
        },
        {
            id: 2,
            name: "Cookie Assortment",
            description: "This that cookie",
            src: Cookie_Assortment,
        },
        {
            id: 3,
            name: "Birthday Cookie",
            description: "This that cookie",
            src: Birthday_Cookie,
        },
        {
            id: 4,
            name: "Gooey Chocolate Chip Cookie",
            description: "This that cookie",
            src: Gooey_Chocolate_Chip_Cookie,
        },
        {
            id: 5,
            name: "Grandmas Chocolate Chip Cookie",
            description: "This that cookie",
            src: Grandmas_Chocolate_Chip_Cookie,
        },
        {
            id: 6,
            name: "Snickerdoodle Cookie",
            description: "This that cookie",
            src: Snickerdoodle_Cookie,
        },
    ],
};

export enum SweetCategories {
    CAKES = "Cakes",
    CUPCAKES = "Cupcakes",
    COOKIES = "Cookies",
}
