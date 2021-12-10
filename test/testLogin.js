const should = require('should');
const auth = require('../controller/auth');
const validate = require('../controller/validate');


describe("test login system", () => {
    it("login successfully", async () => {
        const loginReq = mockRequest({
            userID: "testUsername",
            password = "ssssss"
        })
        const loginRes = mockResponse();

        await auth.login(loginReq, loginRes)

        loginRes.should.have.property('token');
        loginRes.should.have.property('userID');

        const tempToken = loginRes.body.token; 
        const validateReq = mockRequest({
            header:{
                token: tempToken
            }
        })

        const validateRes = mockResponse();

        await validate.authentication(validateReq, validateRes);
        validateRes.should.have.property('userID');
    });
});