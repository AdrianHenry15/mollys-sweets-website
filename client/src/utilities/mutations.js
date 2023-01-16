import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      first_name: $firstName
      last_name: $lastName
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export const REMOVE_FROM_WISHLIST = gql`
  mutation Mutation($productId: ID!) {
    removeFromWishlist(productId: $productId) {
      _id
      name
    }
  }
`;

export const ADD_TO_WISHLIST = gql`
  mutation Mutation($productId: ID!) {
    addToWishlist(productId: $productId) {
      _id
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation Mutation(
    $id: ID!
    $name: String!
    $description: String!
    $price: Float!
    $quantity: Int!
  ) {
    add2Cart(
      _id: $id
      name: $name
      description: $description
      price: $price
      quantity: $quantity
    ) {
      _id
      quantity
    }
  }
`;

export const DELETE_FROM_CART = gql`
  mutation Mutation($productId: ID!) {
    deleteFromCart(productId: $productId) {
      _id
    }
  }
`;

export const ADD_ORDER = gql`
  mutation Mutation($products: [ID]!) {
    addOrder(products: $products) {
      _id
      products {
        _id
      }
    }
  }
`;