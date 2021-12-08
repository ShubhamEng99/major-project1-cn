const express=require('express');
const router=express.Router();

const homecontroller=require('../controllers/homecontroller')

router.use('/users',require('./users'))

router.get('/',homecontroller.home)

router.get('/signout',homecontroller.signout)

module.exports=router;