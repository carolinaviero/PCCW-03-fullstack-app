const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/dog-manager';

mongoose.connect(url, { useNewUrlParser: true });
