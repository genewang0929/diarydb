const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/userRoutes');
const AccountRoutes = require('./routes/accountRoutes');
const AuthRoutes = require('./routes/authRoutes');
const VerifyRoutes = require('./routes/verifyRoutes');
const config = require('./config');
const app = express();
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'test';

/*mongoose
    .connect(config.db[env], config.dbParams)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

console.log(mongoose.connection);*/

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(UserRoutes);
app.use(AuthRoutes);
app.use(VerifyRoutes);
app.use(AccountRoutes);
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });


app.listen(PORT, () => console.log('Server Running...'));

module.exports = app;