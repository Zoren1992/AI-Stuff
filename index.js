const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
// const passport = require('passport');
const logger = require('morgan');
const session = require('express-session');

const cookieParser = require('cookie-parser');

require('./config/passport');

const port = 3000;

const app = express();

// app.use(session({
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: true,
// }));

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(function(req, res, next) {
//   res.locals.user = req.user;
// });

// Enable nody parser
app.use(express.json());
app.use(express.urlencoded( { extended: false} ));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

// Mount session middleware
app.use(cookieParser());




app.listen(port, () => console.log(`Sever started on port ${port}`));