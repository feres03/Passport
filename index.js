const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser')
const port = 5000
const app = express();
const passport = require('passport');

require('./database/connect')
require('./passport-strategies/bearer')
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'tokenSecret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const authen = require('./routes/authAPi');

app.use('/api', authen)

app.listen(port, () => { console.log('App running on port ' + port) })