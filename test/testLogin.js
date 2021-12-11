const supertest = require('supertest');
const chai = require('chai');
var should = require('should');
var app = require('../service');
const request = supertest(app);
const mongoose = require('mongoose');



describe("test login system",  () => {
        
    /*before(function() {
        this.timeout(60000);
        return new Promise((resolve) => {
            setTimeout(() => {
                mongoose
                    .connect('mongodb://mongo:27017/diarydb', { useNewUrlParser: true })
                    .then(() => {
                        console.log('MongoDB Connected ');
                        isErr = 0;
                    })
                    .catch(err => console.log(err))
            }, 60000);
        });
      });*/
    /*before(async function () {
        this.timeout(60000);
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
                    .catch(err => console.log("---"))
            }
            else{
                break;
            }
        }
        console.log("end");
    });*/


    it("should return token", async function(done) {
        console.log("in");
        this.timeout(60000);
        let user = {
            userID: "testUsername",
            password: "123456"
        }
        request
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(user)
        .expect(200)
        .end(function(err, res){
            res.should.have.property('token');
            should.not.exist(err);
            done();
        })
    })
    
});
