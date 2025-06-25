const mongoose=require('mongoose')

let userScheme=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        
        max:20,
        unique:true

    },
    password:{
        type:String,
        required:true,
        min:6,
        unique:true

    },
    isAvatarImageSet:{
       type:Boolean,
       default:false 
    },
    avatarImage:{
        type:String,
        default:""
    }
})

module.exports=mongoose.model('Usersdb',userScheme)