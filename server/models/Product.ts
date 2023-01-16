import mongoose from "mongoose"

const { Schema } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    require: false,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  size: {
    type: String,
    required: false,
  },
  count: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    require: false,
    min: 0,
    max: 2,
    default: 1,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
  },
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
