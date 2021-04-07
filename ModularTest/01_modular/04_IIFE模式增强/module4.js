/* IIFE 模式增强 : 匿名函数自调用（闭包）+引入依赖
这就是现代模块化实现的基石
*/

(function (window, $){
    let msg = 'module4'
    function foo(){
        console.log('foo()', msg)
    }
    window.module4= foo;//此处暴露，是现代JS模块化的基础

    //调用形参 jQuery方法
    $('body').css('background','red'); 
})(window, jQuery)