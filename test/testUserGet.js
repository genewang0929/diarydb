var supertest = require('supertest');
var should = require('should');
var app = require('../service');
var request = supertest(app);

describe("test user get", () => {
    
    it("should return user", function(done) {
        request
        .get('/user')
        .expect(200)
        .end(function(err, res){
            should.not.exist(err);
            done(err);
        })
    });
    
});