const express=require('express');
const router=express.Router();
const usercontroller=require('../controllers/usercontroller')

router.get('/profile',usercontroller.profile)

router.get('/signup',usercontroller.signup);

router.get('/signin',usercontroller.signin);

router.post('/create',usercontroller.create);

router.post('/createsession',usercontroller.createsession);

module.exports=router