var express = require("express");
var router = express.Router();
router.get('/create', (req, res)=> {
    res.render('course/add')
})

router.get('/list', (req, res)=> {
    res.render('course/list')
})
router.get('/category', (req, res)=> {
    res.render('course/category')
})
router.get('/topic', (req, res)=> {
    res.render('course/topic')
})
module.exports = router;