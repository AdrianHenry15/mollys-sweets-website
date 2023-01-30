// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: {
    carts?: mongoDB.Collection;
    categories?: mongoDB.Collection;
    cakes?: mongoDB.Collection;
    cupcakes?: mongoDB.Collection;
    cookies?: mongoDB.Collection;
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
    // START COLLECTIONS
    let cartCollection: string;
    if (process.env.CART_COLLECTION_NAME) {
        cartCollection = process.env.CART_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    let cakeCollection: string;
    if (process.env.CAKE_COLLECTION_NAME) {
        cakeCollection = process.env.CAKE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    let cupcakeCollection: string;
    if (process.env.CUPCAKE_COLLECTION_NAME) {
        cupcakeCollection = process.env.CUPCAKE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    let cookieCollection: string;
    if (process.env.COOKIE_COLLECTION_NAME) {
        cookieCollection = process.env.COOKIE_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    let orderCollection: string;
    if (process.env.ORDER_COLLECTION_NAME) {
        orderCollection = process.env.ORDER_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    let productCollection: string;
    if (process.env.PRODUCT_COLLECTION_NAME) {
        productCollection = process.env.PRODUCT_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    let userCollection: string;
    if (process.env.USER_COLLECTION_NAME) {
        userCollection = process.env.USER_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }
    let categoryCollection: string;
    if (process.env.CATEGORY_COLLECTION_NAME) {
        categoryCollection = process.env.CATEGORY_COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    // END OF COLLECTIONS

    // MongoDB Client Constructor
    const options = { useNewUrlParser: true, useUnifiedTopology: true };

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
        process.env.DB_CONN_STRING,
        options
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
    const cartsCollection: mongoDB.Collection = db.collection(
        process.env.CART_COLLECTION_NAME
    );
    const cakesCollection: mongoDB.Collection = db.collection(
        process.env.CAKE_COLLECTION_NAME
    );
    const cupcakesCollection: mongoDB.Collection = db.collection(
        process.env.CUPCAKE_COLLECTION_NAME
    );
    const cookiesCollection: mongoDB.Collection = db.collection(
        process.env.COOKIE_COLLECTION_NAME
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

    collections.carts = cartsCollection;
    collections.cakes = cakesCollection;
    collections.categories = categoriesCollection;
    collections.cookies = cookiesCollection;
    collections.cupcakes = cupcakesCollection;
    collections.orders = ordersCollection;
    collections.products = productsCollection;
    collections.users = usersCollection;

    console.log(`Successfully connected to database: ${db.databaseName}`);
}
