const usermodel = require('../model/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretkey = "sdyhf";
const user  = (req,res)=>{
    res.send('Hello urmi')
}
const alluser = async(req,res)=>{
  const use = await usermodel.find({})
  if(use.length)res.status(200).send(use)
  else {
    res.status(400).send("No user found");
  }

}
const registration = (req,res)=>{
    const{password,confirmpassword} = req.body;
    if(password !== confirmpassword){
      res.send({msg: 'password doesnot match'});
    }
    else{
    bcrypt.hash( password, 8, async(err,hash)=>{
        req.body.password = hash;
        delete req.body.confimpassword
        // console.log(hashedpassword );
         const students = new usermodel(req.body);
         const data = await students.save();
         res.send({msg:'posted successfully',data});
      })
    
    }

  }
  //==============================
  const login = async(req,res) =>{
    const{ mail, password }= req.body;
      let user = await usermodel.findOne({ mail});
      if(user){
        let isvaild = await bcrypt.compare(password, user.password)
        if(isvaild){

          const data ={
            email : user.email,
            role: "student"
          };
         const token =  jwt.sign(data,secretkey,{expiresIn: '10h'})
          res.send({msg: "login successfull",token})
        }
        else{
          res.send({msg:"password does not match"})
        }
      
      }
      else{
        res.send({msg:"user not found with this mail"});
      }

   res.send({user});   
  }
const tempdelete = async(req,res)=>{
    try{
      const id = req.params.id;
      await usermodel.findOneAndUpdate(
        { _id : id},
        {
          $set:{isDeletd : true}
          
        }
         )
         return res.json({
           msg: "student has been deleted"
         })


    }
    catch(error){
      res.send(error);
    }
 }
// const restore = async(req,res)=>{
//   try{
//     const id = req.params.id;
//     await usermodel.findOneAndUpdate(
//       { _id : id},
//       {
//         $set:{isDeletd : false}
        
//       }
//        )
//        return res.json({
//          msg: "student has been restore successfully"
//        })


//   }
//   catch(error){
//     res.send(error);
//   }
// }

module.exports ={
    user,
    registration,
    login,
    alluser,
    tempdelete,
    //restore
} 






















































// const users = require('../model/user');
// const bcrypt = require('bcryptjs');

// const user  = (req,res)=>{
//     res.send('Hello urmi')


// }
// const registration = (req,res)=>{
//     const{password,confirmpassword} = req.body;
//     if(password !== confirmpassword){
//       res.send({msg: 'password doesnot match'});
//     }
//     else{
//     bcrypt.hash( password, 8, async(err,hash)=>{
//         req.body.password = hash;
//         delete req.body.confimpassword
//         // console.log(hashedpassword );
//          const students = new users(req.body);
//          const data = await students.save();
//          res.send({msg:'posted successfully',data});
//       })
    
//     }

//   }
//   //==============================
//   const login = async(req,res) =>{
//     const{ mail, password }= req.body;
//       let userinfo = await users.findOne({ mail});
//       if(userinfo){
//         let isvaild = await bcrypt.compare(password, userinfo.password)
//         if(isvaild){

//           const data ={
//             email : user.email,
//             role: "student"
//           };
//         //  const token =  jwt.sign(data,secretkey,{expiresIn: '10h'})
//         //   res.send({msg: "login successfull",token})
//         }
//         else{
//           res.send({msg:"password does not match"})
//         }
      
//       }
//       else{
//         res.send({msg:"user not found with this mail"});
//       }

//    res.send({user});   
//   }
// //              const use = new users(req.body);
// //         const data = await use.save();
// //         res.send({msg:'posted successfully'});

// //  }


// // const registration= (req,res)=>{
// //     const {password,confirmpassword} = req.body;
// //     if(password !== confirmpassword){
// //         res.send({msg:'possword doesnot match'}) 

// //     }
// //     else{
// //         bcrypt.hash( password, 8, async(err,hash)=>{
// //             console.log(hash);
// //             delete req.body.confimpassword
// //                 //  req.body.password = hash;
// //                 //  delete.
// //         const use = new users(req.body);
// //         const data = await use.save();
// //         res.send({msg:'posted successfully',data});
// //         })
         

// // }
// // }
//     // if(password !== confirmpassword){
//     //   res.send({msg: 'password doesnot match'});
//     // }
//     // else{
//     // bcrypt.hash( password, 8, async(err,hash)=>{
//     //     req.body.password = hash;
//     //     delete req.body.confimpassword
    
  
//     //   })
    
//     // }

  

// module.exports = {
//     user,
//     registration,
//     login
// };
