var jwt = require('jsonwebtoken');
exports.authentication = async (req, res, next) => {
    let token = req.headers.authorization;
    jwt.verify(token, 'abcd', function(err, decode){
        if(err){
            res.json({msg: '當前用戶未登入'});
        }
        else{
            res.json({
                userID: decode.userID,
                msg: '已登入'
            });
            token: jwt.sign({userID:user.userID}, 'abcd', {
                expiresIn: "60s"
            });
        }
    })
}