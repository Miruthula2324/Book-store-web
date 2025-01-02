const mongoose = require("mongoose");
const Order = require("./order.model");


const createOrder = async (req, res) => {
  try {
    const { productIds } = req.body;


    if (
      !Array.isArray(productIds) ||
      !productIds.every((id) => mongoose.Types.ObjectId.isValid(id))
    ) {
      return res.status(400).json({ message: "Invalid product IDs format" });
    }

    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder); // 201 for resource creation
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};


const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const orders = await Order.find({ email }).populate("productIds");
    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this email" });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

module.exports = { createOrder, getOrderByEmail };
