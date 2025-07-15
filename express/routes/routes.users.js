import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Users List");
})

router.get('/testing',(req,res)=>{
    res.send("Testing users");
})



export {router};

