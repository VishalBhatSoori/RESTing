import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Users List");
})

router.get('/testing',(req,res)=>{
    res.send("Testing users");
})

router.post('/',(req,res)=>{
    res.send("Users Created");
})
//STATIC ROUTES MUST BE OVER DYNAMIC ROUTES

/*
router.get('/:userId',(req,res)=>{
    res.send(`Get user with Id ${req.params.userId}`);
})
*/
/*
router.get('/:userId',(req,res)=>{
    res.send(`Get user with Id ${req.params.userId}`);
})

router.put('/:userId',(req,res)=>{
    res.send(`Update user with Id ${req.params.userId}`);
})

router.delete('/:userId',(req,res)=>{
    res.send(`Delete user with Id ${req.params.userId}`);
})
*/

// the code in the comments is the same as the one below

router
    .route('/:userId')
    .get((req,res)=>{
        res.send(`Get user with Id ${req.params.userId}`);
    })
    .put((req,res)=>{
        res.send(`Update user with Id ${req.params.userId}`);
    })
    .delete((req,res)=>{
        res.send(`Delete user with Id ${req.params.userId}`);
    })

router.param("userId",(req,res,next,id)=>{
    console.log(id);
    //res.send(`Get user with Id ${id}`);
    next();
})


export {router};

