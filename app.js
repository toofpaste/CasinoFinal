//Require dependencies//
var express = require('express');
var path = require('path');
var app = express();
app.set("view engine", "ejs");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRoutes = require('./routes/index');
var User = require('./models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var methodOverride = require('method-override');


//DataBase Logic

mongoose.connect("mongodb://admin:Hellsing1@ds143156.mlab.com:43156/casino", {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("were connected");
})



app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

//ROUTES
app.use(indexRoutes);

//passport Config
app.use(require('express-session')({
    secret:"Joe is the best",
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
    next();
})


//SERVER
app.listen(3000, function(){
    console.log("Server has Started");
})