import express from 'express';
import {Subscriber} from '../models/subscribers.js'
const router = express.Router();

//getting all
router.get('/',async(req,res)=>{
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})
//getting one
router.get('/:subId',getSubscriber,(req,res)=>{
    res.send(res.subscriber.name);
})
//creating one
router.post('/',async (req,res)=>{
    const subscriber = new Subscriber({
        name:req.body.name,
        subscriberToChannel:req.body.sub
    });
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(400).json({messsage:error.message});
    }
})
//updating one
router.patch('/:subId',getSubscriber,async(req,res)=>{
    if(req.body.name!=null){
        res.subscriber.name=req.body.name;
    }
    if(req.body.sub!=null){
        res.subscriber.subscriberToChannel=req.body.sub;
    }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})
//deleting one
router.delete('/:subId',getSubscriber,async (req,res)=>{
    try {
        await res.subscriber.deleteOne();
        res.json({message:"Deleted Subscriber"});
    } catch (error) {
        res.status(500).json({message:"Error removing the document"});
    }
})

async function getSubscriber(req,res,next){
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.subId);
        if(subscriber==null){
            return res.status(404).json({message:"Cannot find subscriber"});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    res.subscriber=subscriber;
    next();
}

export {router};