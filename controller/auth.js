const User = require('../model/userInitDB');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

exports.login = async (req, res) => {
    try{ 
        console.log(req.body);
        let id = req.body.userID;
        let password = req.body.password;

        User.findOne({userID: id}, function(err, user){
            if(err){
                console.log(err);
                console.log("it's error");
                res.status(500).json({
                    msg: "userID " + id + " is not found!"
                });
            }
            else{
                console.log("success !!!!!");
                console.log(user);
                if(user.password == password){
                    res.status(200).json({
                        token: jwt.sign({userID:user.userID}, 'abcd', {
                            expiresIn: "60s"
                        }),
                        userID: user.userID,
                    });
                }
                else 
                    res.json({
                        msg: "password is incorrect"
                    });
                
            }
        });
    }
    catch (error){
        console.log(error);
        res.status(500).json({msg:"err"});
    }
};