const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/majorprojectdevelopment');

const db=mongoose.connection

db.on('error',console.error.bind(console,'error while connecting to database'));

db.once('open',function(err){
    if(err){
        return
    };
    console.log('connected to mongodb')
})

module.exports=db