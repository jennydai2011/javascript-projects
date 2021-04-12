#HTTP

##请求报文
重点是格式与参数
```
行      GET / http://www.google.com/s?q=  HTTP/1.1
头      Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      GET请求体为空，POST可以不为空
        username=admin&password=admin
```

## 响应报文
```
行      HTTP/1.1 200 OK
头      Content-TYpe: text/html;charset=utf-8
        Content-length:2048
        Content-encoding: gzip

空行    
体      <html>
            ....
        </html>
```

* 404
* 403
