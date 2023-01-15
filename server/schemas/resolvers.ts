const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLUpload } = require("graphql-upload");
require("dotenv").config();

export const resolvers = {
    Upload: GraphQLUpload,

    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select("-__v -password")
                    .populate("cart.product")
                    .populate("wishlist")
                    .populate({
                        path: "orders.products",
                        populate: "category",
                    });
                const user = await User.findOne({
                    _id: context.user._id,
                }).populate("orders");

                return userData;
            }
            throw new AuthenticationError("Not logged in");
        },
        users: async () => {
            return User.find()
                .select("-__v -password")
                .populate("cart.product")
                .populate("wishlist")
                .populate({
                    path: "orders.products",
                    populate: "category",
                });
        },

        get_orders: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({
                    _id: context.user._id,
                }).populate("orders");
                return user.orders;
            }
            throw new AuthenticationError("Not logged in");
        },

        get_cart: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError("Not logged in");
            }

            const user = await User.findOne({ _id: context.user._id }).populate(
                "cart.product"
            );

            return user.cart;
        },

        products: async () => {
            return Product.find()
                .select("-__v")
                .populate("category")
                .populate("subCategory");
        },
        product: async (parent, { id }) => {
            return Product.findOne({ _id: id })
                .select("-__v")
                .populate("category")
                .populate("subCategory");
        },
        categories: async () => {
            return Category.find();
        },

        Mutation: {
            addUser: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user);

                return { token, user };
            },

            updateUser: async (parent, args, context) => {
                if (!context.user) {
                    throw new AuthenticationError("Not logged in");
                }

                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    args,
                    { new: true }
                );

                return user;
            },

            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email });

                if (!user) {
                    throw new AuthenticationError("Incorrect credentials");
                }

                const correctPw = await user.isCorrectPassword(password);

                if (!correctPw) {
                    throw new AuthenticationError("Incorrect credentials");
                }

                const token = signToken(user);
                return { token, user };
            },

            signup: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user);

                return { token, user };
            },

            add2Cart: async (parent, args, context) => {
                if (!context.user) {
                    throw new AuthenticationError("Not logged in");
                }
                // if args._id already exists in cart, update quantity
                const user = await User.findOne({ _id: context.user._id });
                const cartProduct = user.cart.find(
                    (item) =>
                        item.product._id.toString() === args._id.toString()
                );

                if (cartProduct) {
                    cartProduct.quantity = args.quantity;
                    await user.save();
                    return user;
                }
                // if args._id does not exist in cart, add to cart
                user.cart.push({ product: args._id, quantity: args.quantity });
                await user.save();
                return user;
            },

            deleteFromCart: async (parent, { productId }, context) => {
                if (!context.user) {
                    throw new AuthenticationError("Not logged in");
                }

                const user = await User.findOne({ _id: context.user._id })
                    .select("-__v -password")
                    .populate("cart.product");

                const cart = user.cart.filter((item) => {
                    return item.product._id.toString() !== productId.toString();
                });

                user.cart = cart;

                await user.save();

                return user;
            },
            addToWishlist: async (parent, { productId }, context) => {
                if (!context.user) {
                    throw new AuthenticationError("Not logged in");
                }
                const user = await User.findOne({ _id: context.user._id });

                user.wishlist.addToSet(productId);

                await user.save();

                return user;
            },
            removeFromWishlist: async (parent, { productId }, context) => {
                if (!context.user) {
                    throw new AuthenticationError("Not logged in");
                }
                const user = await User.findOne({ _id: context.user._id });
                // remove from wishlist
                user.wishlist.pull(productId);
                await user.save();

                return user;
            },

            addOrder: async (parent, { products }, context) => {
                if (context.user) {
                    const order = new Order({ products });

                    await User.findByIdAndUpdate(context.user._id, {
                        $push: { orders: order },
                    });

                    // empty cart
                    await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $set: { cart: [] } }
                    );

                    return order;
                }

                throw new AuthenticationError("Not logged in");
            },
        },
    },
};
