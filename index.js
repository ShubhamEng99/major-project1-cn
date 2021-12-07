const express=require('express');
const port=8000;

const app=express();







app.listen(port,function(err){
    if(err){
        console.log('error while running the server');
        return;
    }
    console.log('server is running on port ',port)
})