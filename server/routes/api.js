const express = require('express');
// const user = require('../models/user');
const userRouter = express.Router();
const User = require('../models/user');
var jwt = require('jsonwebtoken');
const app = express();

userRouter.get('/',(req,res)=>{
    res.send('From API routes')
});

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split('')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token,'secretKey');
    if(!payload){
        return res.status(401).send('Unauthorized request');
    }
    req.userID = payload.subject
    next()
}
function router()
{
userRouter.post('/adduser', function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
            var item = {
              
                email:req.body.user.email,
                uname:req.body.user.uname,
                password:req.body.user.password,
               
            }
            var user= User(item);
            user.save();
    });
// router.post('/register',(req,res)=>{
//     const userData = req.body;
//     let user = new User(userData);
//     user.save((error,registeredUser)=>{
//         if(error){
//             console.log(error);
//         }
//         else{
//             let payload = {subject: registeredUser._id}
//             let token = jwt.sign(payload,'secretKey');
//             res.status(200).send({token});
//         }
//     })
// })

// router.post('/login/user',(req,res)=>{
//     let userData = req.body;
//     User.findOne({email:userData.email},(error,user) =>{
//         if(error){
//             console.log(error);
//         }
//         else {if(!user){
//             res.status(401).send('Invalid email')
//         }
//            else if
//            (user.password != userData.password){
//                res.status(401).send('Invalid password');
//            }
//         else{
//             let payload = {subject:user._id}
//             let token = jwt.sign(payload,'secretKey')
//             res.status(200).send({token});
//         }}
//     })
// })
userRouter.post('/login/user',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        let userdataname= req.body.user.email;
        let userdatapassword=req.body.user.password;
        Userdata.findOne({$or: [{uname:userdataname},{email:userdataname}],password:userdatapassword},(err,doc)=>{
                if(!doc){
                    res.send({doc:doc});
                   }    
                else{
                    let payload={subject:userdataname+userdatapassword}
                    let token=jwt.sign(payload,'secretKey')
                    res.send({doc:doc,token:token});
                   }
        })
    });

return userRouter;
}
module.exports = router;