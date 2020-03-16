//***** Modules goes here *****//
const express = require('express');
//***** ///// *****//

//***** Express Router to export in module *****//
const app = express.Router();
//***** ///// *****//

//***** Distributing requests *****//

//~~ Signup ~~//
const signupModule = require('../controllers/user/registration');
app.use('/register', signupModule);

//~~ Login ~~//
const loginModule = require('../controllers/user/login');
app.use('/login', loginModule);
//***** ///// *****//

//~~ Edit Profile ~~//
const editModule = require('../controllers/user/editProfile');
app.use('/edit', editModule);
//***** ///// *****//

//~~ Get user Profile ~~//
const getUser = require('../controllers/user/getUser');
app.use('/getUser', getUser);
//***** ///// *****//
module.exports = app;