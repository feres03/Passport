const express = require('express');
const passport = require('passport');
const { Register, Login } = require('../auth/auth.controller');
const router = express.Router();



router.post('/register', Register)
router.post('/login', Login)
router.get('/profile', (req, res) => {
    res.send(req.user)
})

module.exports = router;
