const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path=require('path');
const cookieParser=require('cookie-parser');

const userRoute = require('./routes/user');
const { checkForAuthenticationCookie } = require('./middleware/authentication');
const PORT=3000;



app.set('view engine','ejs');
app.set('views',path.resolve("./views"));
app.use(express.urlencoded({ extended:false}));

app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

mongoose.connect('mongodb+srv://fake2113032:king123@cluster0.aldvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(e=>console.log('MongoDB Connected'))

app.get('/',(req,res)=>{
    res.render("home",{
        user:req.user,
    });
});

app.use('/user',userRoute);

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));


