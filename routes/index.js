var express = require('express');
var router = express.Router();
var User = require("../models/user");


//Show Routes
router.get("/", function(req, res){
    res.render('landing');
});

router.get('/blackjack', function(req, res){
    res.render("blackjack");
})

router.get("/hotandcold", function(req, res){
    res.render("hotandcold");
})

router.get("/slots", function(req,res){
    res.render("slots");
})



module.exports = router;