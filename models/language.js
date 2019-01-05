const mongoose = require('mongoose');
const { userSchema } = require('./user');

// Test User model with schema
const languageSchema = new mongoose.Schema({
    title: { type: String, required: true },

    // Another option to refer to user (as nested documents)
    // user: userSchema

    // Another option to refer to user ( refers in another documents list )
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Language = mongoose.model('Language', languageSchema);

// let user = new User({
//     firstname: "George",
//     lastname: "Bibilashvili",
//     age: 29,
// });

// const result = await user.save();

module.exports.Language = Language;
module.exports.languageSchema = languageSchema;

