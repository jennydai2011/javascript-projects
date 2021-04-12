//读写文件

const fs = require('fs')

// fs.readFile('./resource/content.txt', (err, data) =>{
//     //如果出错，抛出错误
//     if(err) throw err;

//     //成功，输出文件内容
//     console.log(data.toString());


// })

//Promise形式封装
const p = new Promise( (resolve, reject) =>{
    fs.readFile('./resource/content.txt', (err, data) =>{
        //如果出错，抛出错误
        if(err) reject(err);
    
        //成功，输出文件内容
        resolve(data);
    
    
    })

})

//处理结果
p.then( value=>{
    console.log(value.toString())
}, reason=>{
    console.log(reason)
}
)