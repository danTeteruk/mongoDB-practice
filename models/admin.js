const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var adminSchema = new Schema({
    email: { type: String, required: true ,lowercase: true},
    name: { type: String, required: true },
    dateOfBirthday: { type: String, required: true },
    manages :[{type: mongoose.Schema.ObjectId, ref: 'Institution'}]
})

var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
