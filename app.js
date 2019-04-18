//Require dependencies//
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require("./models/user");
var indexRoutes = require('./routes/index');
var userRoutes = require('./routes/users')
var User = require('./models/user');
var passport = require('passport');
var LocalStrategy = require("passport-local");
var flash = require('connect-flash');
// var session = require('express-session');
var expressLayouts = require('express-ejs-layouts');


require('./config/passport');

//DataBase Logic

mongoose.connect("mongodb://admin:Hellsing1@ds143156.mlab.com:43156/casino", {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("were connected");
})

// app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(flash());



//express session
//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "Joe is the best",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

//ROUTES
app.use(indexRoutes);
app.use(userRoutes);




//SERVER
app.listen(process.env.PORT || 5000, function () {
    console.log("Yelp Camp server has Started");
})