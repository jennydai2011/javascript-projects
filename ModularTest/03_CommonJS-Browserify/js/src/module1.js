//module.exports = value 暴露一个对象
module.exports = {
    msg: 'module1',
    foo() {
        console.log('module 1 foo()', this.msg)
    }
}