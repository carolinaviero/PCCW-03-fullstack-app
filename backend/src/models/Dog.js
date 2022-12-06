const mongoose = require('mongoose');

const Dog = mongoose.model('Dog', {
    name: {
        type: String,
        required: [true, 'Your dog needs a name'],
    },
    age: {
        type: Number,
        max: 29,
        required: true,
    },
    city: {
        type: String,
    },
    img_url: {
        type: String,
        required: true,
    }
});

module.exports = Dog;