import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Upload
  type Product {
    _id: ID
    product!: String
    cakeBase: {
      singleTier: Boolean!;
      multipleTier: Boolean!;
      roundCake: Boolean!;
      sheetCake: Boolean!;
      cakeSize: Boolean!;
      totalPrice: Float!;
    }
    cupcakeBase: {
      regular: Boolean!;
      mini: Boolean!;
      quantity: String!;
      totalPrice: Float!;
    }
    cookieBase: {
      regular: Boolean!;
      mini: Boolean!;
      quantity: String!;
      totalPrice: Float!;
    }
    cakeFlavor: {
      flavor: String!;
      filling: String!;
      frosting: String!;
      fruit: Boolean!;
      fruitType: String!;
      totalPrice: Float!;
    }
    cupcakeFlavor: {
      flavor: String!;
      frosting: String!;
      totalPrice: Float!;
    }
    cookieFlavor: {
      flavor: String!;
      frosting: Boolean!;
      frostingType: String!;
      totalPrice: Float!;
    }
    dateOfEvent: Date!;
    pickUpOrDelivery: Boolean!;
    arrivalTime: Date!;
    occasion: String!;
    recipient: String!;
    preferredColors: String!;
    additionalDetails: String!;
    totalPrice: Number!;
    linkExample: String;
    imageURL: String;
    description: String;
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
    status: String
  }
  type Cart {
    _id: ID
    product: Product
    quantity: Int
  }
  type User {
    _id: ID
    first_name: String
    last_name: String
    image_url: String
    email: String
    password: String
    isAdmin: Boolean
    orders: [Order]
    cart: [Cart]
    wishlist: [Product]
  }
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    user: User
    users: [User]
    products: [Product]
    product(id: ID!): Product
    categories: [Category]
    get_cart: [Cart]
    checkout(products: [ID]!): Checkout
    get_orders(_id: ID!): Order
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    signup(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      first_name: String
      last_name: String
      email: String
      password: String
    ): Auth
    updateProfilePicture(image: Upload!): Auth
    add2Cart(
      _id: ID!
      name: String!
      description: String!
      image_url: String!
      price: Float!
      quantity: Int!
    ): Product
    addToWishlist(productId: ID!): Product
    removeFromWishlist(productId: ID!): Product
    deleteFromCart(productId: ID!): Cart
    addCategory(name: String!): Category
    deleteCategory(id: ID!): Category
    updateCategory(id: ID!, name: String!): Category
    addProduct(
      image: Upload!
      name: String!
      description: String!
      price: Float!
      quantity: Int!
      categoryId: ID!
    ): Product
    updateProduct(
      id: ID!
      image: Upload
      name: String
      description: String
      price: Float
      quantity: Int
      category: ID
    ): Product
    deleteProduct(id: ID!): Product
  }
`;

export default typeDefs;