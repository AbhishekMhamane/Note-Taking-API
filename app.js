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

//database connection
mongoose.connect('mongodb://localhost:27017/googlekeepDB',{useNewUrlParser:true,useUnifiedTopology:true});


//routers
app.use(cors({
  origin:"*",
  methods:'GET,POST,PUT,DELETE,PATCH',
}));

app.use('/',router);



// app.use(cors(corsOptions));

//listen on port
app.listen(port, () => `Server running on port ${port} 🔥`);