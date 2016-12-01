var express = require("express");
var router = express.Router();
router.get('/', (req, res)=> {
    res.render('advert/advertlist')
})
router.get('/add', (req, res)=> {
    res.render('advert/advertadd')
})

module.exports = router;