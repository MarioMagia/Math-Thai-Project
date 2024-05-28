const session = require('express-session');
require('dotenv').config();
const sessionMiddleware = session({
    secret: 'mySecretKey',
    resave: true,
    name: "mathGame",
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: false,
        domain: process.env.DOMAIN || "math-thai.onrender.com", //"localhost"
        path: "/",
        maxAge: 3600000,
        sameSite: 'lax'
    }
});
module.exports = sessionMiddleware;
