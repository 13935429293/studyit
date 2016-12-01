var express = require("express");
var router = express.Router();
var t_Model = require("../models/teacher");
//展示讲师数据
router.get('/', (req, res)=> {
    t_Model.show(function (err, rows) {
        if (err) return;
        res.render('teachers/teacherlist', {teachers: rows});
    })
})

router.get('/add', (req, res)=> {
    res.render('teachers/teacheradd')
})
//添加讲师数据
router.post('/add', (req, res)=> {

    console.log("数据提交了");
    var body = req.body;
    console.log(body);
    t_Model.add(body, function (err, rows) {
        if (err) return;
        res.json({
            code: 10000,
            msg: "成功"
        })
        console.log('数据添加成功');
        console.log(rows);
    });


    //console.log(req);
})
module.exports = router;