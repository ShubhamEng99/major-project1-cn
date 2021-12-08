const User=require('../models/user')
module.exports.profile=function(req,res){
    User.findOne({_id:req.cookies.user_id},function(err,user){
        if(user){
            return res.render('profile',{title:'user profile',details:user})
        }else{
            return res.redirect('signin')
        }
    })
   

}

module.exports.signup=function(req,res){
    return res.render('signup',{title:'signup'})
}

module.exports.signin=function(req,res){
    return res.render('signin',{title:'signin'})
}


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

module.exports.createsession=function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(user){
           if(user.password!=req.body.password){
               return res.redirect('back');
           }
           res.cookie('user_id',user._id);
           return res.redirect('profile')
        }else{
            return res.redirect('back')
        }
    })
}