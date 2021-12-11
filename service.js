const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/userRoutes');
const AccountRoutes = require('./routes/accountRoutes');
const AuthRoutes = require('./routes/authRoutes');
const ValidateRoutes = require('./routes/validateRoutes');
const mongo = require('./controller/mongo');
const app = express();
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;

/*mongoose
    .connect('mongodb://mongo:27017/diarydb', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));*/


/*(async function(){
  let isErr = 1;
    for(let i = 0; i < 3; i++){
        if(isErr){
            console.log("hello");
            await mongoose
                .connect('mongodb://mongo:27017/diarydb', { useNewUrlParser: true })
                .then(() => {
                    console.log('MongoDB Connected ', i);
                    isErr = 0;
                })
                .catch(err => console.log(err))
        }
        else{
            break;
        }
    }
    console.log("connecting end");
})();
    */

 /*var start = new Date().getTime(); 
 while(1)
     if ((new Date().getTime() - start) > 30000)
           break;*/

(async (arg1, arg2, arg3) => {
    console.log("connecting...")
    await mongo().then(async mongoose => {
        try{
            console.log('Connected to mongo!!');
            await command.execute(client, message, args);
        }
        finally{
            mongoose.connection.close();
        }
    });
    console.log('connect success');
})();

var start = new Date().getTime(); 
 while(1)
     if ((new Date().getTime() - start) > 30000)
           break;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
  
app.use(UserRoutes);
app.use(AuthRoutes);
app.use(ValidateRoutes);
app.use(AccountRoutes);
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });


app.listen(PORT, () => console.log('Server Running...'));

module.exports = app;