const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const authSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    Lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },

}, {
    timestamps: true, versionKey: false
})
module.exports = mongoose.model('users', authSchema)