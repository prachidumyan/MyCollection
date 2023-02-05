module.exports = {
   
    homePage: (req, res) => { 
        res.render('home.ejs');
    },
    ShoppingCart: (req, res) => { 
        res.render('shopping-cart.ejs');
    },
    Checkout: (req, res) => { 
        res.render('checkout.ejs');
    },
    Contact: (req, res) => { 
        res.render('contact.ejs');
    },
    ShopPage: (req, res) => { 
        res.render('shop.ejs');
    },
    ShopDetails: (req, res) => { 
        res.render('shop-details.ejs');
    },
}