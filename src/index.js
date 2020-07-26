const express=require('express');
const path=require('path')
const userRouter=require('./routes/user');
const expressLayout=require('express-ejs-layouts');

port=process.env.PORT;
app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'../public')));

app.use(expressLayout);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScript',true);

// set the view engine to ejs
app.set('view engine','ejs');

app.use('/',userRouter);

app.listen(port,()=>{
    console.log('your port is running on port no.'+port);
})
