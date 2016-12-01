/**
 * Created by thinkpad on 2016/12/1.
 */

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    port: "3307",
    user: 'root',
    password: '321329',
    database: 'studyit'
});

module.exports = connection;



