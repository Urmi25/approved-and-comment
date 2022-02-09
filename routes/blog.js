const express = require('express');
const router = express.Router();

const {users,alluser,create,getbyid,approved,
    is_approved,blogapproved ,blog_approved,
    commentcreate, createcomment } = require('../controller/blog.js')


//router.get("/find-one/:id",alluser);
//router.get("/Getbyid/:id",getbyid);
router.post("/create",create);

//===================================================

router.get("/get-all",approved);
router.get("/getall",is_approved ); 
router.put('/true/:id',blogapproved);
router.put('/false/:id',blog_approved);
//router.post("/commentcreate",commentcreate);
router.post("/createcomment",createcomment)


module.exports = router;