/**
 * Created by thinkpad on 2016/12/1.
 */
var express = require("express");
var router = express.Router();
router.get('/', (req, res)=> {
    res.render('login/login',{});
})

module.exports = router;
