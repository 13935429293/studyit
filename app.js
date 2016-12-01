var express = require("express");
var path = require("path");
var index = require("./router/index");
var user = require("./router/user");
var teachers = require('./router/teachers');
var course = require("./router/course");
var advert = require("./router/advert");
var login = require('./router/login');
var bodyParser = require("body-parser");

var app = express();
//设置模板
app.set("views", path.join(__dirname, "views"));
//创建引擎
app.set("view engine", "xtpl");
//引入中间件
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/user", user);
app.use("/teachers", teachers);
app.use("/course", course);
app.use("/advert", advert);
app.use("/login", login);

app.use("/", express.static(path.join(__dirname, "public")))
app.use("/", express.static(path.join(__dirname, "uploads")))
app.listen(3000, function () {
    console.log("running");
})