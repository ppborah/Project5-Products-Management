const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is required",
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: "Description is required",
      trim: true,
    },

    price: {
      type: Number,
      required: "Price is required",
    },

    currencyId: {
      type: String,
      required: "CurrencyId is required",
      trim: true,
      default: "INR",
    },

    currencyFormat: {
      type: String,
      required: "Currency format is required",
      trim: true,
      default: "₹",
    },

    isFreeShipping: {
      type: Boolean,
      default: false,
    },

    productImage: {
      type: String,
      required: "Product Image is required",
      trim: true,
    },

    style: {
      type: String,
      trim: true,
    },

    availableSizes: [
      {
        type: String,
        trim: true,
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"],
      },
    ],

    installments: {
      type: Number,
    },

    deletedAt: {
      type: Date,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
