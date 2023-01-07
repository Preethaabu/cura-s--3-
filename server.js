const express = require('express')
const app = express()
const path = require('path');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('views'));
app.use(express.static('assets'));

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})

app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/welcome.html'))
})
app.get('/homepage',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})
const admin = require('./routes/admin')
app.use('/',admin)
app.listen(3200,()=>{
    console.log('listening to server 3000');
})

// app.get('/delete/:id',async (req,res)=>{
//     // try{
//     // const data=await axios.delete('https://638f5b8c4ddca317d7f644f9.mockapi.io/form_pg/'+req.params.id)
//     // //console.log(data)
    
   
//     // }catch(err)
//     // {
//     //     console.log(err);
//     // }
//     res.redirect('/admin');
// })

