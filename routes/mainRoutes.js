const { Router } = require('express');
const { homePage, ShoppingCart, Checkout, Contact, ShopPage, ShopDetails } = require('../controllers/mainController.js')

const app = Router();

app.get('/', homePage);
app.get('/shopping-cart', ShoppingCart);
app.get('/checkout', Checkout);
app.get('/contact', Contact);
app.get('/shop', ShopPage);
app.get('/shop-details', ShopDetails);

module.exports = app;