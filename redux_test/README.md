## 1.求和案例_redux精简版
    (1).去除Count自身组件的状态
    （2）.src下建立
         -src
            -redux
                -store.js
                -count_reducer.js
    (3). store.js
        1). 引入redux中的createStore函数，创建一个store
        2). createStore调用时要传入一个为其服务的reducer
        3). 记得暴露store对象
    
    （4). count_reducer.js
        1）. reducer的本质是一个函数，接收preState, action，返回加工后的newState
        2）. reducer有两个作用： 初始化状态，加工状态
        3). reducer被第一次调用时， 是store自动触发的，传递的preState是undefined
    
    （5). 在index.js中检测store中状态的变化，一旦发生改变重新渲染<App/>
       备注：redux只负责状态管理，至于如何驱动状态改变，要在组件中自定

## 2.求和案例_redux完整版
    (1). constant 放入单独的constant.js

## 3求和案例_redux异步action版
    (1). 明确： 延迟的动作不交给组件自身，而是由异步action完成
    （2). 何时需要异步action： 想要对状态操作，但是数据靠异步返回
    (3). 具体编码:
        1) yarn add redux-thunk， 配置在store中
        2）创建action的函数不返回一般对象，而是一个函数，在该函数中写异步任务
        3) 异步任务有结果后，调用一个同步action
    （4）备注,异步action不是必须写的，完全可以自己等待异步任务结果，再分发

## 4.求和案例_react-redux基本使用
    （1）明确两个概念
        1）UI组件，不能使用任何redux的api,只负责页面呈现，交互
        2） 容器组件：负责和redux通信，将结果交给UI组件
    （2）如何创建一个容易组件- react-reduxd connect 函数
          connect(mapStateToProps, mapDispatchToProps)(UI组件)
            - mapStateToProps： 映射状态，返回一个对象
            - mapDispatchToProps: 映射状态的操作犯法，返回一个对象
    (3) 备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引用
