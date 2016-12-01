/**
 * Created by thinkpad on 2016/11/29.
 */
var express = require("express");
var router = express.Router();
router.get('/', (req, res)=> {
    res.render("user/userlist");
})

router.get('/profile',(req,res)=>{
    res.render('user/userprofile')
})

module.exports = router;
