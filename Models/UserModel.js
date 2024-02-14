const mongoose = require('mongoose');

const User = mongoose.model("User" , {
    buisnessName: String,
    buisnessEmail: String,
    password: String
});


module.exports = User;