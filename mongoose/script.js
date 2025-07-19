import mongoose from 'mongoose';
import {User} from './Users.js';

mongoose.connect('mongodb://localhost/myapp');

queryInDb();
//deleteInDb();
//findInDb();

async function queryInDb(){
    try {
        const queryResult = User.where({name:"Kavya"});
        console.log(queryResult);
    } catch (error) {
        console.log("Error!!!!",error.message);
    }
}
async function findInDb(){
    try {
        const userFound = await User.findById("6879dacbef433a802aacff5e");
        console.log(userFound);
    } catch (error) {
        console.log("Error!!!",error.message);
    }
}

async function deleteInDb(){
    try{
        const acknowledgement = await User.deleteMany({name:"Aneesh"});
        console.log("User deleted",acknowledgement);
    }catch(e){
        console.log("Errror!!!!!",e.message);
    }
}
// calling the function saveInDb to add a new user
saveInDb();
async function saveInDb(){
    try{
        const user = await User.create({name:"Aneesh",age:22,address:{
        city:"Hospet",
        state:"Chattisgadh"
        }});
        /*const user = new User({name:"Kedar",age:21});
        await user.save();*/
        user.__v=null;
        await user.save();
        console.log(user);
    }catch(e){
        console.log("Error!!!!!!",e.message);
    }
}