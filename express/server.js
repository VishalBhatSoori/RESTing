import express from 'express';
import {router as userRouter} from './routes/routes.users.js';

const app = express();

app.use(express.static('public'));

app.set('view engine','ejs');

app.get("/",(req,res)=>{
    console.log("Trying out different res.send methods");
    res.send("Hii from express");
    //res.status(500).send("I am Vishal");
    //res.status(200).json({"message":"I love chocoLava"});
    //res.download("server.js");
    //res.sendFile(path.resolve("server.js"));
    //res.render("index");
    //res.render('index',{text:" to Browser"})
})

app.use('/users',userRouter);
app.listen(3000,()=>{
    console.log("The server is running on port 3000 on my localhost");
})