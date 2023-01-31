// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: {
    // cake products
    cakes?: mongoDB.Collection;
    // cake base
    cakeBases?: mongoDB.Collection;
    cakeSizes?: mongoDB.Collection;
    cakeTiers?: mongoDB.Collection;
    cakeShapes?: mongoDB.Collection;
    // cake flavors
    cakeFlavors?: mongoDB.Collection;
    cakeFrostings?: mongoDB.Collection;
    cakeFillings?: mongoDB.Collection;
    cakeFruits?: mongoDB.Collection;

    // cupcake prodcuts
    cupcakes?: mongoDB.Collection;
    //cupcake base
    cupcakeBases?: mongoDB.Collection;
    cupcakeQuantities?: mongoDB.Collection;
    cupcakeSizes?: mongoDB.Collection;
    //cupcake flavor
    cupcakeFlavors?: mongoDB.Collection;
    cupcakeFrostings?: mongoDB.Collection;

    // cookie products
    cookies?: mongoDB.Collection;
    // cookie base
    cookieBases?: mongoDB.Collection;
    cookieQuantities?: mongoDB.Collection;
    cookieSizes?: mongoDB.Collection;
    //cookie flavors
    cookieFlavors?: mongoDB.Collection;
    cookieFrostings?: mongoDB.Collection;
    // other
    carts?: mongoDB.Collection;
    categories?: mongoDB.Collection;
    orders?: mongoDB.Collection;
    products?: mongoDB.Collection;
    users?: mongoDB.Collection;
} = {};

// Initialize Connection
export async function connectToDatabase() {
    dotenv.config();

    // make sure env is never undefined
    let mongoURI: string;
    if (process.env.DB_CONN_STRING) {
        mongoURI = process.env.DB_CONN_STRING;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    // make sure env is never undefined
    // COLLECTION VARIABLES
    //cakes
    let cakeCollection: string;
    //cake bases
    let cakeBaseCollection: string;
    let cakeTierCollection: string;
    let cakeShapeCollection: string;
    let cakeSizeCollection: string;
    // cake flavors
    let cakeFlavorCollection: string;
    let cakeFrostingCollection: string;
    let cakeFillingCollection: string;
    let cakeFruitCollection: string;

    //cupcakes
    let cupcakeCollection: string;
    //cupcake base
    let cupcakeBaseCollection: string;
    let cupcakeQuantityCollection: string;
    let cupcakeSizeCollection: string;
    //cupcake flavor
    let cupcakeFlavorCollection: string;
    let cupcakeFrostingCollection: string;

    //cookies
    let cookieCollection: string;
    // cookie base
    let cookieBaseCollection: string;
    let cookieQuantityCollection: string;
    let cookieSizeCollection: string;
    //cookie flavor
    let cookieFlavorCollection: string;
    let cookieFrostingCollection: string;

    //other
    let cartCollection: string;
    let orderCollection: string;
    let productCollection: string;
    let userCollection: string;
    let categoryCollection: string;

    // START COLLECTIONS

    // cakes
    if (process.env.CAKE_COLLECTION_NAME) {
        cakeCollection = process.env.CAKE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    // cake base
    if (process.env.CAKE_BASE_COLLECTION_NAME) {
        cakeBaseCollection = process.env.CAKE_BASE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CAKE_SIZE_COLLECTION_NAME) {
        cakeSizeCollection = process.env.CAKE_SIZE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CAKE_TIER_COLLECTION_NAME) {
        cakeTierCollection = process.env.CAKE_TIER_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CAKE_SHAPE_COLLECTION_NAME) {
        cakeShapeCollection = process.env.CAKE_SHAPE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    // cake flavor
    if (process.env.CAKE_FLAVOR_COLLECTION_NAME) {
        cakeFlavorCollection = process.env.CAKE_FLAVOR_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CAKE_FROSTING_COLLECTION_NAME) {
        cakeFlavorCollection = process.env.CAKE_FROSTING_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CAKE_FILLING_COLLECTION_NAME) {
        cakeFillingCollection = process.env.CAKE_FILLING_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CAKE_FRUIT_COLLECTION_NAME) {
        cakeFruitCollection = process.env.CAKE_FRUIT_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    // cupcakes
    if (process.env.CUPCAKE_COLLECTION_NAME) {
        cupcakeCollection = process.env.CUPCAKE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    //cupcake bases
    if (process.env.CUPCAKE_BASE_COLLECTION_NAME) {
        cupcakeBaseCollection = process.env.CUPCAKE_BASE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CUPCAKE_SIZE_COLLECTION_NAME) {
        cupcakeSizeCollection = process.env.CUPCAKE_SIZE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CUPCAKE_QUANTITY_COLLECTION_NAME) {
        cupcakeQuantityCollection =
            process.env.CUPCAKE_QUANTITY_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    //cupcake flavors
    if (process.env.CUPCAKE_FLAVOR_COLLECTION_NAME) {
        cupcakeFlavorCollection = process.env.CUPCAKE_FLAVOR_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.CUPCAKE_FROSTING_COLLECTION_NAME) {
        cupcakeFrostingCollection =
            process.env.CUPCAKE_FROSTING_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    // cookies
    if (process.env.COOKIE_COLLECTION_NAME) {
        cookieCollection = process.env.COOKIE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    //cookie base
    if (process.env.COOKIE_BASE_COLLECTION_NAME) {
        cookieBaseCollection = process.env.COOKIE_BASE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.COOKIE_SIZE_COLLECTION_NAME) {
        cookieSizeCollection = process.env.COOKIE_SIZE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.COOKIE_QUANTITY_COLLECTION_NAME) {
        cookieQuantityCollection = process.env.COOKIE_QUANTITY_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    // cookie flavors
    if (process.env.COOKIE_FLAVOR_COLLECTION_NAME) {
        cookieFlavorCollection = process.env.COOKIE_FLAVOR_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    if (process.env.COOKIE_FROSTING_COLLECTION_NAME) {
        cookieFlavorCollection = process.env.COOKIE_FROSTING_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    // other
    if (process.env.CART_COLLECTION_NAME) {
        cartCollection = process.env.CART_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    if (process.env.ORDER_COLLECTION_NAME) {
        orderCollection = process.env.ORDER_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    if (process.env.PRODUCT_COLLECTION_NAME) {
        productCollection = process.env.PRODUCT_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    if (process.env.USER_COLLECTION_NAME) {
        userCollection = process.env.USER_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    if (process.env.CATEGORY_COLLECTION_NAME) {
        categoryCollection = process.env.CATEGORY_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    // END OF COLLECTIONS

    // MongoDB Client Constructor
    // const options = { useNewUrlParser: true, useUnifiedTopology: true };

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
        process.env.DB_CONN_STRING
    );

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    //JSON schema validation to ensure all future documents match the model we expect.

    // await db.command({
    //     "collMod": [process.env.CART_COLLECTION_NAME, process.env.CAKE_COLLECTION_NAME],
    //     "validator": {
    //         $jsonSchema: {
    //             bsonType: "object",
    //             required: ["name", "price", "category"],
    //             additionalProperties: false,
    //             properties: {
    //             _id: {},
    //             name: {
    //                 bsonType: "string",
    //                 description: "'name' is required and is a string"
    //             },
    //             price: {
    //                 bsonType: "number",
    //                 description: "'price' is required and is a number"
    //             },
    //             category: {
    //                 bsonType: "string",
    //                 description: "'category' is required and is a string"
    //             }
    //             }
    //         }
    //      }
    // });

    // COLLECTIONS

    //cakes
    const cakesCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_COLLECTION_NAME
    );
    // CAKE BASES
    const cakeBasesCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_BASE_COLLECTION_NAME
    );
    const cakeShapesCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_SHAPE_COLLECTION_NAME
    );
    const cakeTiersCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_TIER_COLLECTION_NAME
    );
    const cakeSizesCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_SIZE_COLLECTION_NAME
    );
    // CAKE FLAVORS
    const cakeFlavorsCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_FLAVOR_COLLECTION_NAME
    );
    const cakeFrostingsCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_FROSTING_COLLECTION_NAME
    );
    const cakeFillingsCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_FILLING_COLLECTION_NAME
    );
    const cakeFruitsCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_FRUIT_COLLECTION_NAME
    );

    //cupcakes
    const cupcakesCollection: mongoDB.Collection = db.collection(
        process.env.CUPCAKE_COLLECTION_NAME
    );
    // CUPCAKE BASES
    const cupcakeBasesCollection: mongoDB.Collection = db.collection(
        process.env.CUPCAKE_BASE_COLLECTION_NAME
    );
    const cupcakeSizesCollection: mongoDB.Collection = db.collection(
        process.env.CUPCAKE_SIZE_COLLECTION_NAME
    );
    const cupcakeQuantitiesCollection: mongoDB.Collection = db.collection(
        process.env.CUPCAKE_QUANTITY_COLLECTION_NAME
    );
    // CUPCAKE FLAVORS
    const cupcakeFlavorsCollection: mongoDB.Collection = db.collection(
        process.env.CUPCAKE_FLAVOR_COLLECTION_NAME
    );
    const cupcakeFrostingsCollection: mongoDB.Collection = db.collection(
        process.env.CUPCAKE_FROSTING_COLLECTION_NAME
    );

    //cookies
    const cookiesCollection: mongoDB.Collection = db.collection(
        process.env.COOKIE_COLLECTION_NAME
    );
    // COOKIE BASES
    const cookieBasesCollection: mongoDB.Collection = db.collection(
        process.env.COOKIE_FLAVOR_COLLECTION_NAME
    );
    const cookieSizesCollection: mongoDB.Collection = db.collection(
        process.env.COOKIE_SIZE_COLLECTION_NAME
    );
    const cookieQuantitiesCollection: mongoDB.Collection = db.collection(
        process.env.COOKIE_QUANTITY_COLLECTION_NAME
    );
    // COOKIE FLAVORS
    const cookieFlavorsCollection: mongoDB.Collection = db.collection(
        process.env.COOKIE_BASE_COLLECTION_NAME
    );
    const cookieFrostingsCollection: mongoDB.Collection = db.collection(
        process.env.COOKIE_FROSTING_COLLECTION_NAME
    );

    //other
    const cartsCollection: mongoDB.Collection = db.collection(
        process.env.CART_COLLECTION_NAME
    );
    const ordersCollection: mongoDB.Collection = db.collection(
        process.env.ORDER_COLLECTION_NAME
    );
    const productsCollection: mongoDB.Collection = db.collection(
        process.env.PRODUCT_COLLECTION_NAME
    );
    const categoriesCollection: mongoDB.Collection = db.collection(
        process.env.CATEGORY_COLLECTION_NAME
    );
    const usersCollection: mongoDB.Collection = db.collection(
        process.env.USER_COLLECTION_NAME
    );

    //cakes
    collections.cakes = cakesCollection;
    //CAKE BASES
    collections.cakeBases = cakeBasesCollection;
    collections.cakeShapes = cakeBasesCollection;
    collections.cakeSizes = cakeBasesCollection;
    collections.cakeTiers = cakeBasesCollection;
    // CAKE FLAOVRS
    collections.cakeFlavors = cakeFlavorsCollection;
    collections.cakeFrostings = cakeFlavorsCollection;
    collections.cakeFillings = cakeFlavorsCollection;
    collections.cakeFruits = cakeFlavorsCollection;

    //cookies
    collections.cookies = cookiesCollection;
    //COOKIE BASES
    collections.cookieBases = cookieBasesCollection;
    collections.cookieQuantities = cookieBasesCollection;
    collections.cookieSizes = cookieBasesCollection;
    // COOKE FLAVORS
    collections.cookieFlavors = cookieFlavorsCollection;
    collections.cookieFrostings = cookieFlavorsCollection;

    //cupcakes
    collections.cupcakes = cupcakesCollection;
    // CUPCAKE BASES
    collections.cupcakeBases = cupcakeBasesCollection;
    collections.cupcakeQuantities = cupcakeBasesCollection;
    collections.cupcakeSizes = cupcakeBasesCollection;
    // CUPCAKE FLAVORS
    collections.cupcakeFlavors = cupcakeFlavorsCollection;
    collections.cupcakeFrostings = cupcakeFlavorsCollection;

    //other
    collections.categories = categoriesCollection;
    collections.carts = cartsCollection;
    collections.orders = ordersCollection;
    collections.products = productsCollection;
    collections.users = usersCollection;

    console.log(`Successfully connected to database: ${db.databaseName}`);
}
