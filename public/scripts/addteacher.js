define(function (require, exports, modules) {
    var $ = require("jquery");
    //console.log($);
    $('#addTeacher').on("submit", function () {
        //alert('a');
        var formData = $(this).serialize();
        $.ajax({
            url: "/teachers/add",
            type: "post",
            data: formData,
            success: function (data) {
                alert("添加成功");
                if (data.code == 10000) {
                    location.reload()
                    console.log(data.msg);
                }
            }
        })

        return false;
    })

    // $("#addTeacher").on("submit", function () {
    //     alert("tijao");
    // })
})