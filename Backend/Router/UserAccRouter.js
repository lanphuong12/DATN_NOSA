var express = require('express');
//Use router funtion from express
var router = express.Router();
    //requie teacher controller
const accController = require("../src/UserAccController")
    //handles post request with url /api/login
router.post('/login', accController.login);
// export router to use in index file
module.exports = router;