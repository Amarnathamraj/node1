const express=require('express')
const app=express()

app.get('/home',(req,resp)=>{
    console.log('browser requested')
    resp.send('<h1>hello hi</h1>')
})
app.post('/home',(req,resp)=>{
    console.log('pos trequest')
    resp.send('<h1>post regwuest</h1>')
})
app.delete('/home',(req,res)=>{
    console.log('delted ')
    res.send('deleted ')
})
app.listen(8080,()=>{
    console.log('app is listening at port no 8080')
})
