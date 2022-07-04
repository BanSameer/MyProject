import  express  from "express";
const router = express.Router();
import pizzaSchema from "../model/pizza.js"

router.get('/', async(req,res,next)=>{
try{
 const pizzas =await pizzaSchema.find()
res.status(200).send({success:true, data:pizzas})
   }catch(err){
    res.status(500).send({
        success:false, message:err.message
    })
   } 
});





export default router;