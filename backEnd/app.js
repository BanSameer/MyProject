import express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/usersRoute.js";
import pizzaRoutes from "./routes/pizzasRoute.js";
import orderRoutes from "./routes/ordersRoute.js";
const app = express()
const PORT= 5000

//Connecting toMongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/restaurentApp', ()=>console.log('Connection To MongoDB Established'))


//'Using middlewares'
app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//routes
app.use("/users", userRoutes);
app.use("/pizzas", pizzaRoutes);
app.use("/orders", orderRoutes);

















app.listen(PORT, ()=>console.log("Server Running on PORT 5000"))
