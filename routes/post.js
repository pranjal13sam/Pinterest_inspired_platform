const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,//har post ke paas user ki id hogi jis post ne usse banaya taaki hum yeh pta laga paaye ki user kon hai 
    ref:"user"
  },
  title:String,
  description:String,
  image:String
})



module.exports=mongoose.model("post",postSchema)