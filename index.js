const express=require('express');
const port=8000;
const path=require('path');
const app=express();
const expresslayouts=require('express-ejs-layouts');

app.use(express.static('./assets'))
app.use(expresslayouts)
//use express router
app.use('/',require('./routes'))
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))



app.listen(port,function(err){
    if(err){
        console.log('error while running the server');
        return;
    }
    console.log('server is running on port ',port)
})