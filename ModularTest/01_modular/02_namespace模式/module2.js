/* namespace 模式 */

let obj = {
    msg: 'module2',
    foo(){
        console.log('foo()', this.msg);
    }
}