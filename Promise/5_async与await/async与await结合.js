/**
 * resource 1.html 2.html 3.html 内容
 */

const fs = require('fs')

//不使用asyn, await, 只是用传统的回调函数实现
// fs.readFile('./resource/1.html', (err, data1) =>{
//     if(err) throw err;

//     fs.readFile('./resource/2.html', (err, data2) =>{
//         if(err) throw err;
    
//         fs.readFile('./resource/3.html', (err, data3) =>{
//             if(err) throw err;
        
//             console.log(data1+data2+data3)
        
//         })
    
//     })

// })

function mineReadFile(path){
    let dataRet =  fs.readFile(path, (err, data) =>{
            if(err) throw err;
            console.log(data.toString())
            return data
    }) 

    return dataRet;
}
//用async 和 await实现
async function main(){
    try{
        let data1 = await mineReadFile('./resource/1.html')
        let data2 = await mineReadFile('./resource/2.html')
        let data3 = await mineReadFile('./resource/3.html')
        console.log(data1 + data2 + data3)
    }catch(e){
        console.log(e)
    }
    
}
main()