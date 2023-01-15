const { gql } = require("apollo-server-express");

export const typeDefs = gql`
    scalar Upload

    type Category {
        _id: ID
        name: String
    }
`;
