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

//Post route
router.post("/", function(req,res){
    var name = req.body.name;
    var password = req.body.password;
    var money = req.body.bankroll;
    var newUser = {username: name, password: password, bankRoll: money};
    User.create(newUser, function(err, newlyCreated){
        if(err){
            console.log(err)
        }else {
            console.log(newlyCreated)
            res.redirect("/");
        }
    })
});


module.exports = router;