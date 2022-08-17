const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51L7G14SGEh9U7Q6NAAjTg7Zhk2Jii1iHOJ6fqKy39rBZrXMJM9cMTKldPI7an0f6GwgUN7h4ylSC2etjV6Yop45e00UDWGxcmJ"
);
//const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
        res.send("payment success");
    }

    else{

        res.send("payment failed");
    }
  }

  catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});
module.exports = router;

