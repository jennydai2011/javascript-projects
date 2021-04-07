//定义一个有依赖的模块
//调用jQuery --jQuery内部改名为jquery if defind.amd
define(['dataService', 'jquery'], function (dataService, $){
    let msg ='alerter.js'

    function showMsg(){
        console.log(msg, dataService.getName())
    }

    //调用jQuery --jQuery内部改名为jquery if defind.amd
    $('body').css('background', 'pink') // Uncaught TypeError: $ is not a function

    //暴露模块
    return {showMsg}
});