const mongoose=require('mongoose');

const noteSchema=mongoose.Schema({
    title:String,
    note:String
});

module.exports=mongoose.model("Note",noteSchema);