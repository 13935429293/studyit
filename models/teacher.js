var db = require('../config/db');

exports.add = function (body, callback) {
    db.query("INSERT INTO `teacher` SET ?", body, callback);
};
exports.show = function (callback) {
    db.query("SELECT * FROM `teacher`", callback);
}