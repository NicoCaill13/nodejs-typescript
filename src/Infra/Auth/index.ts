import {createToken} from './createToken'

const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {

    const token = req.header('Authorization');

    try {
        jwt.verify(token.replace('Bearer', '').trim(), process.env.HASH_JWT, (err, decoded) => {
            if (err && err.name === "TokenExpiredError") {
                res.status(498).json({
                    status: 498,
                    message: 'Expired token',
                });
            } else if (err && err.name === "JsonWebTokenError") {
                res.status(400).json({
                    status: 400,
                    message: 'Invalid token',
                });
            } else {
                req.user = decoded;
                req.token = token;
                next();
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: 'No token',
        });
    }
};

export {authToken, createToken}