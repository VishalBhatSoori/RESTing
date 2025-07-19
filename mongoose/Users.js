import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    city:String,
    state:String
})
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    age : Number,
    email: String,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
    /*address: {
        city: String,
        state: String
    }*/

},{timestamps:true});

export const User = mongoose.model("User",userSchema);