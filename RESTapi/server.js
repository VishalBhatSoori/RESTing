import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {router as subscribersRouter} from './routes/subscribers.js';
dotenv.config();

const port = process.env.PORT;
const app = express();
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error',(error)=>{
    console.log(error);
})
db.once('open',()=>{
    console.log("Connected to Database");
})
//console.log(db);
app.use(express.json());
app.use('/subscribers',subscribersRouter);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})