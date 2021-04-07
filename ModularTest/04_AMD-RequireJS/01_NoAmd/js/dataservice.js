//定义一个没有依赖的模块
(function(window){
    let name = 'dataservice.js'
    function getName(){
        return name;
    }
    //暴露出去被使用
    window.dataService = {getName}
})(window)