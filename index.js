const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path=require('path');
const userRoute = require('./routes/user');
const PORT=3000;



app.set('view engine','ejs');
app.set('views',path.resolve("./views"));
app.use(express.urlencoded({ extended:false}));

mongoose.connect('mongodb+srv://fake2113032:king123@cluster0.aldvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(e=>console.log('MongoDB Connected'))

app.get('/',(req,res)=>{
    res.render("home");
});

app.use('/user',userRoute);

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));


