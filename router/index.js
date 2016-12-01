var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
    res.render("dashboard/index", {name: "world"});
})
router.get('/settings', (req, res)=> {
    res.render("dashboard/settings", {});
})

router.get('/repass', (req, res)=> {
    res.render('dashboard/repass');
})


module.exports = router;