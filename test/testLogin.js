const supertest = require('supertest');
const chai = require('chai');
var should = require('should');
var app = require('../service');
const request = supertest(app);
const config = require('../config');
const env = process.env.NODE_ENV || 'test';
const mongoose = require('mongoose');

let token;

before(async function () {
    await mongoose
        .connect(config.db[env], config.dbParams)
        .then(() => { console.log('MongoDB Connected ')})
        .catch(err => console.log(err));
});

describe("test login system",  () => {

    it("should have status 200", function(done) {
        let user = {
            userID: "testUsername",
            password: "ssssss"
        }
        request
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(user)
        .expect(200)
        .end(function(err, res){
            token = res.body.token;
            should.not.exist(err);
            done();
        })
    })
    
});

describe("test verify system",  () => {

    it("should have status 200", function(done) {
        request
        .post('/verify')
        .set('Content-Type', 'application/json')
        .set('authorization', token)
        .expect(200)
        .end(function(err, res){
            should.not.exist(err);
            done();
        })
    })
    
});
