const Blog = require('../model/blog')
const user = require('../model/user')
const Comment = require('../model/comments')

const create = async(req,res)=>{
    try{
        const userblog = new  Blog(req.body);
        const data =await  userblog.save()
        res.status(201).send({ msg: 'Blog Created',data})
    }
    catch(err){
        res.send(err);
    }
}

const approved = async (req,res)=>{
    try{
        const data = await Blog.find({isapproved: false})
      
        if(data.length){
            res.status(200).send({
                data
            })
        }
        else {
            res.status(200).send({msg:'No data found',data});       
        }
    }
    catch(err)
    {
        res.send(err);
    }
}
const is_approved = async (req,res)=>{
    try{
        const data = await Blog.find({isapproved: true})
        if(data.length){
            res.status(200).send({
                data
            })
        }
        else {
            res.status(200).send({msg:'No data found',data});       
        }
    }
    catch(err)
    {
        res.send(err);
    }
}
const blogapproved = async (req,res)=>{
    try{ 
        const id = req.params.id;
           await Blog.findOneAndUpdate( 
                    { _id:id},
                 {
                     $set : { isapproved :true } 
                 }     
             )
             res.send({msg: "approved successfully"})
    }
    catch(err){
        res.send(err);
    }

}
const blog_approved = async (req,res)=>{
    try{ 
        const id = req.params.id;
              await Blog.findOneAndUpdate( 
                    { _id:id},
                 {
                     $set : { isapproved : false} 
                 }     
             )
             res.send({msg: "approved successfully"})
    }
    catch(err){
        res.send(err);
    }

}


const createcomment = async(req,res)=>{
    try{ 
         const usercomment = new Comment(req.body);
        const data = await usercomment.save()
        
        const id = req.params.id;
        await Blog.findOne(
            {_id: id},
            {$push :{comment: data._id }}).populate('comment')

        res.status(201).send({ msg: 'Comment Created',data})
    }
    catch(err){
        res.send(err);
    }
}

module.exports = {
   
    create,
  
    approved ,
    is_approved,
    blogapproved,
    blog_approved,
    createcomment ,
    
}