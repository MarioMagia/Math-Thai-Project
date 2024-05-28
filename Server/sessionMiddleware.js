const session = require('express-session');
require('dotenv').config();
const sessionMiddleware = session({
    secret: 'mySecretKey',
    resave: true,
    name: "mathGame",
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: false,
        domain: process.env.DOMAIN || "math-thai.ddns.net", //"localhost"
        path: "/",
        maxAge: 3600000,
        sameSite: 'none'
    }
});
module.exports = sessionMiddleware;
