const mongoose = require('mongoose')
const jwt=require('jsonwebtoken')

//const JWT_SECRET="HellBound" // Secret key to be save in enviornment files
const { Schema } = mongoose


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
       
    },
    lastName: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tokens:[{token:{
        type:String}
    }]
})

userSchema.methods.generateAuthToken=async function(){
    const user=this
    //console.log(process.env.JWT_SECRET)
    const token=jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET,{expiresIn:"1h"}) // token is signed by secret key
    user.tokens=user.tokens.concat({token})// concatenating the token generated login from different device.
    await user.save() //saving the tokens generated for user
    return token
}

module.exports=mongoose.model('loginUser',userSchema);