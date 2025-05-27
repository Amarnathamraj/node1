const express=require('express')
const app=express()

app.get('/home',(req,resp)=>{
    console.log('browser requested')
    resp.send('<h1>hello hi</h1>')
})
app.listen(8080,()=>{
    console.log('app is listening at port no 8080')
})
