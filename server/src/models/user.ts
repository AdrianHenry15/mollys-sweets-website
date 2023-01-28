const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
const Order = require("./Order")
const Cart = require("./Cart")
const Product = require("./Product")

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  image_url: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  orders: [Order.schema],
  cart: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, min: 0, default: 1 },
    },
  ],
  wishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
})

const User = model("User", userSchema)

module.exports = User
