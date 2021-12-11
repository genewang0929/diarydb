const mongoose = require('mongoose');

module.exports = async () => {
    await mongoose
        .connect('mongodb://mongo:27017/diarydb', { useNewUrlParser: true })
        .then(x => {
            console.log(
                `Connected to Mongo! Database name: "${x.connections[0].name}"`,
            );
        })
        .catch(err => {
            console.error('Error connecting to mongo', err);
        });
    return mongoose;
};