import  express  from "express";
const router = express.Router();
import orderSchema from "../model/order.js"

router.get('/', async(req,res,next)=>{
   try{
const orders =await orderSchema.find()
res.status(200).send({success:true, data:orders})
   }catch(err){
    res.status(500).send({
        success:false, message:err.message
    })
   } 
})

export default router;