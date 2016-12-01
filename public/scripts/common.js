/**
 * Created by thinkpad on 2016/11/30.
 */
define(function (require, exports, modules) {
    var $ = require("jquery");

    $('.navs a').on('click', function (e) {
//            console.log(this.href);
        //var _this = $(this)
        // console.log(_this.href);
        //console.log(location.pathname);
        if (this.href !== "javascript:;") {
            return
        }
        $(this).next("ul").slideToggle();


    })
    $('.navs a').each(function () {
        var _this = $(this)
        var href = _this.attr("href");
       // console.log(href + "=========" + location.pathname);
        pathname = location.pathname
       // console.log(pathname,)
        if (href !== location.pathname) {
            return
        }
        _this.addClass("active");
        if(_this.parent().parent().hasClass("list-unstyled")){
            _this.parent().parent().slideDown();
        }
    })


})