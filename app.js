//requiring packages
const express=require('express');
const mongoose=require('mongoose');
var cors = require('cors');
const router=require('./routes/route');
//initialized app
const app=express();



//configuring dotenv
require('dotenv').config();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());


mongoose.connect('mongodb+srv://admin-abhi:admin-abhi@cluster0.dmwil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});

//configuration of cross origin
app.use(cors());

//routers
app.use('/',router);



// app.use(cors(corsOptions));

//listen on port
app.listen(port, () => `Server running on port ${port} 🔥`);