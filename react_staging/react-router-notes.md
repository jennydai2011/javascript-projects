## 路由的基本使用
    1. 明确好界面中的导航区，展示区
    2. 导航区的a标签改为Link标签
        <Link to="/xxx">Demo</Link>
    3. 展示区写Route标签进行路径的匹配
        <Route path='/xxx' component={Demo} />
    4. <App>的最外侧包裹了一个<BrowserRouter>或者<HashRouter>

## 路由组件与一般组件
    1. 写法不同
            一般组件: <Demo/>
            路由组件： <Route path='/xxx' component={Demo} />
    2. 存放位置不同：
            一般组件： components
            路由组件： pages
    3. 接收到的props不同：
            一般组件： 写组件标签式传递了什么，接收到什么
            路由组件： 
            {history: {…}, location: {…}, match: {…}, staticContext: undefined}
        history:
                action: "PUSH"
                block: ƒ block(prompt)
                createHref: ƒ createHref(location)
                go: ƒ go(n)
                goBack: ƒ goBack()
                goForward: ƒ goForward()
                length: 25
                listen: ƒ listen(listener)
        location: {pathname: "/about", search: "", hash: "", state: undefined, key: "0ongxo"}
                push: ƒ push(path, state)
                replace: ƒ replace(path, state)
                __proto__: Object
                location:
                hash: ""
                key: "0ongxo"
                pathname: "/about"
                search: ""
                state: undefined
                __proto__: Object
        match:
                isExact: true
                params: {}
                path: "/about"
                url: "/about"
                __proto__: Object
                staticContext: undefined
                __proto__: Object       

## 五、NavLink与封装NavLink
        1. NavLink可以实现路由链接的高亮， 通过activeClassName指定样式名
        2. 标签体内容是一个特殊的标签属性
        3. 通过this.props.children可以获得标签体内容

## 六、Switch的使用
        1. 通常情况下，path和component是一一对应关系
        2，Switch可以提高路由匹配效率（只匹配第一个找到的）
## 七、解决多级路径刷新页面样式丢失的问题
        1. public/index.html 中 引入样式式不写 ./  写 /(绝对路径)
        2. public/index.html 中 引入样式式不写 ./  写 %PUBLIC_URL% （常用）
        3. 使用HashRouter（不常用）
## 八、路由的严格匹配与模糊匹配
        1. 默认使用的是模糊匹配（简单记： 【输入的路径】必须包含要匹配的路径，而且顺序 一致）
        2. 开启严格匹配 < Route exact={true} path="/about" component={About} />
        3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
## 九、Redirect的使用
        1. 相当于缺省路由

## 十、嵌套路由
        1. 子组件路由注册时必须以父组件Router路径开头，不然无法匹配
        2. 路由的佩佩是按照路由注册的顺序进行的

## 十一、 向路由组件传递参数
        1. param参数
                路由链接（携带参数）: <Link to="/demo/test/tome/18">详情</Link>
                注册路由 (声明接收): <Route path="/demo/test/:name/:age" component={Test}/>
                接收参数: const {id, age} = this.props.match.params
        2. search参数
                路由链接（携带参数）: <Link to="/demo/test/?name=tome&age=18">详情</Link>
                注册路由 (无需声明，正常注册即可): <Route path="/demo/test" component={Test}/>
                接收参数: const {search} = this.props.location
                备注: 获取到的search是urlencoded编码字符串，需要借助querystring解析
        3. state参数（不同于一般组件的state参数，是路由组件的state参数）
                路由链接（携带参数）: <Link to={{pathname: '/home/message/detail', state: {id:msgObj.id, title:msgObj.title} }}>{msgObj.title}</Link>
                注册路由 (无需声明，正常注册即可): <Route path="/demo/test" component={Test}/>
                接收参数: const {search} = this.props.location.state
                备注: 刷新也可以保存参数，地址栏里不显示参数

## 十二、编程式路由导航
        借助this.prop.history对象上的API操作路由跳转，前进，后退
        push
        replace
        goBack
        goForward
        go

## 十三、withRouter
        //只有路由组件才有history属性， Header是一般组件, 包成withRouter组件