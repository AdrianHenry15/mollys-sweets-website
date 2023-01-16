const db = require("./connection");
const { User, Product, Category, SubCategory } = require("../models");

db.once("open", async () => {
    await Category.deleteMany();
    const categories = await SubCategory.insertMany([
        { name: "Cake" },
        { name: "Cupcake" },
        { name: "Cookie" }
    ]);

    console.log("categories seeded");

    await SubCategory.deleteMany();

    const subCategories = await Category.insertMany([
        { name: "CakeFlavor" }, //0
        { name: "CakeFrosting" }, //1
        { name: "CakeFilling" }, //2
        { name: "CookieFlavor" }, //3
        { name: "Fruit" } //4
    ]);

    console.log("subcategories seeded");

    await Product.deleteMany();

    const products = await Product.insertMany([
        //empty objects for dropdown defaultvalue
        {
            name: ``,
            price: 0.0,
            categories: ``,
        },
        //fruit
        {
            name: `Banana`,
            price: 1.0,
            categories: categories[4]._id
        },
        {
            name: `Apple`,
            price: 1.0,
            categories: categories[4]._id
        },
        {
            name: `Blueberry`,
            price: 1.0,
            categories: categories[4]._id
        },
        {
            name: `Strawberry`,
            price: 1.0,
            categories: categories[4]._id,
        },
        //flavors
        {
            name: `Vanilla Bean`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Almond`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Carrot`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Coconut`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Chocolate Earthquake`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Strawberry Champagne`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Red Velvet`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Chocolate`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Birthday`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Oreo`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Brown Butter`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        {
            name: `Lemon`,
            price: 2.0,
            categories: [categories[0]._id, categories[1]._id],
            subCategories: [subCategories[0]._id]
        },
        //frostings
        {
            name: `Swiss Buttercream`,
            price: 1.50,
            categories: [categories[0]._id, categories[1]._id, categories[2]._id],
            subCategories: [subCategories[1]._id]
        },
        {
            name: `Cream Cheese Buttercream`,
            price: 1.50,
            categories: [categories[0]._id, categories[1]._id, categories[2]._id],
            subCategories: [subCategories[1]._id]
        },
        {
            name: `Buttercream`,
            price: 1.50,
            categories: [categories[0]._id, categories[1]._id, categories[2]._id],
            subCategories: [subCategories[1]._id]
        },
        //fillings
        {
            name: `Blueberry Jam`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Strawberry Jam`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Ganache`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Vanilla Mousse`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Chocolate Mousse`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Strawberry Mousse`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Caramel Mousse`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Peanut Butter Mousse`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Boston Cream`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        {
            name: `Fresh Fruit`,
            price: 1.25,
            categories: [categories[0]._id],
            subCategories: [subCategories[2]._id]
        },
        //cookies
        {
            name: `Chocolate Chip`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Sugar`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Peanut Butter`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Oatmeal Raisin`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Snickerdoodle`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Dark Chocolate`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Red Velvet`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Birthday Cake`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Brownie`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Oreo`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Coconut`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        {
            name: `Drop`,
            price: 1.75,
            categories: categories[2]._id,
            subCategories: subCategories[3]._id
        },
        // sizes
        //sheet
        {
            name: `Sheet`,
            size: `1/4`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Sheet`,
            size: `1/2`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Sheet`,
            size: `FULL`,
            price: 2.75,
            categories: categories[0]._id
        },
        //round
        {
            name: `Round`,
            size: `6"`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Round`,
            size: `7"`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Round`,
            size: `8"`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Round`,
            size: `9"`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Round`,
            size: `10"`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Round`,
            size: `12"`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Round`,
            size: `14"`,
            price: 2.75,
            categories: categories[0]._id
        },
        {
            name: `Round`,
            size: `16"`,
            price: 2.75,
            categories: categories[0]._id
        },
        //regular cupcakes
        {
            name: `Regular`,
            size: `regular`,
            count: `12`,
            price: 20.00,
            categories: categories[1]._id
        },
        {
            name: `Regular`,
            size: `regular`,
            count: `24`,
            price: 40.00,
            categories: categories[1]._id
        },
        {
            name: `Regular`,
            size: `regular`,
            count: `36`,
            price: 60.00,
            categories: categories[1]._id
        },
        {
            name: `Regular`,
            size: `regular`,
            count: `48`,
            price: 80.00,
            categories: categories[1]._id
        },
        //mini
        {
            name: `Mini`,
            size: `mini`,
            count: `12`,
            price: 20.00,
            categories: categories[1]._id
        },
        {
            name: `Mini`,
            size: `mini`,
            count: `12`,
            price: 40.00,
            categories: categories[1]._id
        },
        {
            name: `Mini`,
            size: `mini`,
            count: `12`,
            price: 60.00,
            categories: categories[1]._id
        },
        {
            name: `Mini`,
            size: `mini`,
            count: `12`,
            price: 80.00,
            categories: categories[1]._id
        },
        //regular cookies
        {
            name: `Regular`,
            size: `regular`,
            count: `12`,
            price: 20.00,
            categories: categories[2]._id
        },
        {
            name: `Regular`,
            size: `regular`,
            count: `24`,
            price: 40.00,
            categories: categories[2]._id
        },
        {
            name: `Regular`,
            size: `regular`,
            count: `36`,
            price: 60.00,
            categories: categories[2]._id
        },
        {
            name: `Regular`,
            size: `regular`,
            count: `48`,
            price: 80.00,
            categories: categories[2]._id
        },
        //mini cookies
        {
            name: `Mini`,
            size: `mini`,
            count: `6`,
            price: 10.00,
            categories: categories[2]._id
        },
        {
            name: `Mini`,
            size: `mini`,
            count: `12`,
            price: 20.00,
            categories: categories[2]._id
        },
        {
            name: `Mini`,
            size: `mini`,
            count: `18`,
            price: 30.00,
            categories: categories[2]._id
        },
        {
            name: `Mini`,
            size: `mini`,
            count: `24`,
            price: 40.00,
            categories: categories[2]._id
        },
        {
            name: [`Regular`, `Mini`],
            size: [`regular`, `mini`],
            count: `More`,
            price: 0.00,
            categories: [categories[1]._id, categories[2]._id]
        },
    ]);

    console.log("products seeded");

    await User.deleteMany();

    await User.create({
        first_name: "Adrian",
        last_name: "Henry",
        email: "adrian@example.com",
        password: "password",
        isAdmin: true,
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id],
            },
        ],
        cart: [
        ],
        wishlist: [products[0]._id, products[1]._id],
    });
})
