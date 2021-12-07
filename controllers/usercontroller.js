module.exports.profile=function(req,res){
    return res.render('profile',{title:'user profile'})

}

module.exports.signup=function(req,res){
    return res.render('signup',{title:'signup'})
}

module.exports.signin=function(req,res){
    return res.render('signin',{title:'signin'})
}

const User=require('../models/user')
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirmpassword){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user')
            return;
        }
        if(!user){ 
        User.create(req.body,function(err,user){
            return res.redirect('signin')
        })
      }else{
        return res.redirect('back')
    }
    })
    
}