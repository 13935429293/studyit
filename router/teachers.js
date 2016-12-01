var express = require("express");
var router = express.Router();
router.get('/', (req, res)=> {
    res.render('teachers/teacherlist')
})
router.get('/add', (req, res)=> {
    res.render('teachers/teacheradd')
})

module.exports = router;