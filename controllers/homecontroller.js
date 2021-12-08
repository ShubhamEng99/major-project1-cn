module.exports.home=function(req,res){
    
    return res.render('home',{

        title:"major project"
    });
}
module.exports.signout=function(req,res){
    res.clearCookie('user_id');
    return res.redirect('/');
}