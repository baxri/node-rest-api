const mongoose = require('mongoose');

// Test User model with schema
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    age: Number,
});

const User = mongoose.model('User', userSchema);

// let user = new User({
//     firstname: "George",
//     lastname: "Bibilashvili",
//     age: 29,
// });

// const result = await user.save();

module.exports.User = User;
module.exports.userSchema = userSchema;

