import mongoose from "mongoose";
 const Schema = mongoose.Schema;

 const pizzaSchema = new Schema({
name:{type:String, required:true},
stock:{type:Number,required:true},
caption:{type:String,required:true},
image:{type:String,required:true},
price:{type:Number,required:true},
 })

 export default mongoose.model('pizzas',pizzaSchema);
 

 /* name: `Pepperoni Pizza`,
        id:1,
        stock:3, 
        caption:`So Typical`,
        image: Pepperoni,
        price: 15.99, */