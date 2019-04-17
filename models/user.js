var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    bankRoll: Number
});

module.exports = mongoose.model("User", UserSchema);