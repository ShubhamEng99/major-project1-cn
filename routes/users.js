const express=require('express');
const router=express.Router();
const passport=require('passport');
const usercontroller=require('../controllers/usercontroller')

router.get('/profile',passport.checkAuthentication,usercontroller.profile)

router.get('/signup',usercontroller.signup);

router.get('/signin',usercontroller.signin);

router.post('/create',usercontroller.create);

router.post('/create-session',passport.authenticate('local',{failureRedirect:'/signin'}),usercontroller.creatsession)

module.exports=router