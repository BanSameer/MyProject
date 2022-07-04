import mongoose from "mongoose";
 const Schema = mongoose.Schema;

 const orderSchema = new Schema({
    
userId:{type:mongoose.Schema.Types.ObjectId, ref:'users'},
pizzas:[{type:mongoose.Schema.Types.ObjectId, ref:'users'}]

})

 export default mongoose.model('orders',orderSchema);