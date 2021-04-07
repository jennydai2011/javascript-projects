(function(){
    requirejs.config({
        baseUrl: 'js/', //出发基本路径，如果不使用，则从当前文件出发找依赖文件
        paths:{
            dataService: './modules/dataService', //不要加.js， require.js默认会加上js
            alerter: './modules/alerter',
            jquery: './lib/jquery-3.6.0.min'

        }
    });

    requirejs(['alerter'], function(alerter){
        alerter.showMsg();
    })
})()