const express = require("express");

const shopControllers = require("../controllers/shop");

// const cartControllers = require("../controllers/cart");

// const cartProducts = require("../controllers/cart-item");
// const orderPage = require("../controllers/order");

const router = express.Router();

router.get("/products", shopControllers.shopProducts);
router.post("/postCart", shopControllers.postCart);

router.get("/getCart", shopControllers.getCart);
router.post("/deleteFromCart", shopControllers.deleteFromCart);

// router.get("/items", cartProducts.cartAllItems);

// router.post("/orders", cartControllers.orders);
// router.get("/orderDetails", orderPage.orderDetails);

module.exports = router;
