import  express  from "express";
const router = express.Router();
import userSchema from "../model/user.js"

router.get('/', async(req,res,next)=>{
   try{
const users =await userSchema.find()
res.status(200).send({success:true, data:users})
   }catch(err){
    res.status(500).send({
        success:false, message:err.message
    })
   } 
})

export default router;