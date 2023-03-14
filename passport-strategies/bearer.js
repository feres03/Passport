const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require('../models/auth')
const LocalStrategy = require('passport-http-bearer').Strategy;
passport.use(new LocalStrategy(
    async function (token, done) {
        const decoded = jwt.verify(token, 'tokenSecret');
        console.log(decoded)
        const user = await User.findById(decoded.idUser)
        if (!user) { return done(null, false); }
        return done(null, user);

    }
));