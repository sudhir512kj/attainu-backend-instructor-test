const mongoose = require('mongoose');

//simple schema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 150
    },
    body: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
});

module.exports = Post = mongoose.model('post', PostSchema);