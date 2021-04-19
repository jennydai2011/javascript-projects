//1 引入express
const express = require('express')

//2 创建应用对象
const app = express()

//3 创建路由规则
app.get('/server', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    response.send('HELLO AJAX ---222');
})
app.post('/server', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    response.send('HELLO AJAX post');
})
app.all('/server', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应
    response.send('HELLO AJAX all ---22');
})
app.all('/json-server', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应
    const data ={
        name: 'back from server'
    }
    let str =JSON.stringify(data)
    response.send(str);
})

//4 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动， 8000端口监听中....")
})
app.get('/ie', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    response.send('HELLO AJAX ---IE4');
})
app.get('/longrunning', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout( ()=>{
        //设置响应
    response.send('延时响应');
    }, 5000)
    
})
//jquery
app.get('/jquery', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    response.send('HELLO AJAX ---jquery');
})

//axios
app.get('/axios', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    
    //设置响应
    response.send('HELLO AJAX ---axios');
})

app.get('/fetch', (request, response) =>{
    //
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST');
    
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    //设置响应
    response.send('HELLO AJAX ---fetch');

})

