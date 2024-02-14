const mongoose = require('mongoose');

const User = mongoose.model("User" , {
    businessName: String,
    businessEmail: String,
    password: String
});