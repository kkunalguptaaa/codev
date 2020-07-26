
const express=require('express');
const userRouter=express.Router();

userRouter.get('/',(req,res)=>{
    res.render('home',{title:'home'})
})
userRouter.get('/users/login',(req,res)=>{
    res.render('login',{title:'login'})
})
userRouter.get('/users/signup',(req,res)=>{
    res.render('signup',{title:'signup'})
})
// //custon
// userRouter.get('yourUrl',(req,res)=>{
//     res.render('viewFileName',{title:'title'})
// })

module.exports=userRouter;