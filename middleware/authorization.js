const jwt = require("jsonwebtoken");
const _ = require("lodash");

const verifyToken = async (req, res, next) => {
    console.log("----- In Authorization verfiyToken method -----");
    try{

        if(_.isEmpty(req.headers.token)){
            return res.status(400).send({
                status: "Failed",
                error: "Invalid Token"
            })
        }
        const decode = await jwt.verify(req.headers.token, process.env.JWT_KEY);

        req.userId = decode;
        req.token = req.headers.token;

        next();
    }catch(err){
        console.error("----- Error in Authorization verifyToken method -----", err);
        res.status(400).send({
            status: "Failed",
            error: "Unable to verify the user"
        })
    }
}

module.exports = {
    verifyToken
}