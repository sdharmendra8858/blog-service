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
        const userId = decode.userId;
        const token = req.headers.token;

        req.userId = userId
        req.token = token;
        req.session.userId = userId;

        const userSession = await redisClient.SISMEMBER(`user:token:${userId}`, token);

        if(!userSession){
            return res.status(400).send({
                status: "Failed",
                error: "Session expired, please log in."
            })
        }

        next();
    }catch(err){
        console.error("----- Error in Authorization verifyToken method -----", err);
        return res.status(400).send({
            status: "Failed",
            error: "Unable to verify the user"
        })
    }
}

module.exports = {
    verifyToken
}