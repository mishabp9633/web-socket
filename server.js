const { Socket } = require('engine.io')
var express=require('express')
var app=express()
var http = require('http').createServer(app)
var io= require('socket.io')(http)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/board.html')
})


app.get('/admin',(req,res)=>{
    res.sendFile(__dirname+'/public/admin.html')  
})

io.on("connection",(socket)=>{
    console.log("new connection established");

    socket.on("disconnect",()=>{
        console.log('connection closed');
    })
    socket.on('message',(text)=>{
        console.log(text)
        io.emit('board_content',text)
    })
  
})

io.on("connection",(socket)=>{
    console.log("new connection established");

    socket.on("disconnect",()=>{
        console.log('connection closed');
    })
    socket.on('mess',(tex)=>{
        console.log(tex)
        io.emit('board',tex)
    })
})

http.listen(4000,()=>{
    console.log('connected to server');
})