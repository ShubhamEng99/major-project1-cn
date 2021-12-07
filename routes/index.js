const express=require('express');
const router=express.Router();

const homecontroller=require('../controllers/homecontroller')

router.use('/users',require('./users'))

router.get('/',homecontroller.home)

module.exports=router;