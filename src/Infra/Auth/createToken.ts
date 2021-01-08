const jwt = require('jsonwebtoken');

const createToken = () => {
    return {
        token: jwt.sign({
            Iss: 'userName_here',
            Exp: Math.floor(Date.now() / 1000) + (60 * 60),
        }, process.env.HASH_JWT, { expiresIn: '1h' }),
        expiration: Math.floor(Date.now() / 1000) + (60 * 60)
    }
};

export {createToken}