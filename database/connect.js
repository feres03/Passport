const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Challenge8').then(() => console.log('Connected to DataBase')).catch((error) => console.log(error))
mongoose.Promise = global.Promise