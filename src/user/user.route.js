const express =require('express');
const controller=require('./user.controller');


const router =express.Router();

router.post("/signup",controller.create_user);
router.get("/users",controller.get_user);
router.post("/verifyotp",controller.verify_otp);

module.exports=router;