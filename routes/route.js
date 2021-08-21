const express=require('express');
const Note=require('../models/note');

let router=express.Router();



router.route('/')
.get(function(req,res){

    Note.find({},function(err,notes){

        if(!err)
        {
            res.send(notes);
        }
        else
        {
            res.send(err);
        }

    });
})

.post(function(req,res)
{
    const n=new Note({
        title:req.body.title,
        note:req.body.note
    });

    n.save(function(err)
    {
        if(!err)
        {
           res.send("added");
        }
        else
        {
            res.send(err);
        }
    });
});

//request for specific id

router.route("/:id")
.get(function(req,res){
    Note.findById({_id:req.params.id},function(err,note)
    {
        if(!err)
        {
            res.send(note);
        }
        else{
            res.send(err);
        }
    });
})
.put(function(req,res){

    Note.update({_id:req.params.id},
        {title:req.body.title,note:req.body.note},
        {overwrite:true},
        function(err){
            if(!err)
            {
              res.send("Record Updated");
            }
        });
   
})

.patch(function(req,res){
      
    Note.update({_id:req.params.id},{$set:req.body},function(err){

        if(!err)
        {
            res.send("Record Upadated");
        }
        else
        {
            res.send(err);
        }
    });
})

.delete(function(req,res)
{
    Note.findByIdAndRemove(req.params.id,function(err)
    {
       if(!err)
       {
           res.send("Record Deleted");
       }
       else
       {
           res.send(err);
       }
    });
});

router.all('/*', (req,res) => { res.status(405), 
    res.json({'status':405,
              'message':req.method + ' not allowed on this route'}) 
 });

module.exports=router;