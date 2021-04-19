# Promise 笔记

## 异步编程
### Promise之前，都是使用回调函数处理
* fs 文件操作
    ```
    require('fs).readFile('./index.html', (err, data) =>{})
    ```
* 数据库操作

* AJAX
    ```
    $.get('/server', (data)=>{})
    ```
* 定时器
    ```
    setTimeout(()=>{}, 1000)
    ```

## Promise 状态
Promise对象
  Promise{
      [[PromiseState]],
      [[PromiseResult]]
  }
1. Pending
2. resolved
3. rejected
 只能有pending变为resolved或者rejected, 只能变一次

  
## Promise 实例对象的值
保存异步任务成功或者失败的结果，value, or reason

## Promise 的工作流程
new Promise -> 执行异步操作, 
成功了，执行resolve->返回promise 对象， resolve状态, then 回调 onResolved() 方法
失败了, 执行reject()-》 返回promise对象，rejected状态, then 回调onRejected() 方法
-》继续新的promise对象
