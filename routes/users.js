var express = require('express');
var router = express.Router();
var passport = require('passport');
// var bcrypt = require('bcryptjs');

var User = require("../models/user");



//register route
router.get("/register", function(req, res){
    res.render("register");
});

//login route
//Show Login Form
router.get("/login", function(req, res){
    res.render("login");

});

//Post route

router.get("/register", function(req, res){
    res.render("register");
});
//Handle Sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            return res.render("register", {"error": err.message});
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to Casino " + user.username);
            res.redirect("/");
        });
    });
});
// Login
router.post("/login", passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/login",
}), function(req, res){

});

  // Logout
  router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/");
});

// show register form
router.get("/register", function(req, res){
    res.render("register", {page: 'register'}); 
 });
 
 //show login form
 router.get("/login", function(req, res){
    res.render("login", {page: 'login'}); 
 });

module.exports = router;