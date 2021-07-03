const express=require('express');
const pug =require('pug');
const path=require('path');
const fs=require('fs');
const app=express();
const port=8000;


//express specific 
app.use('/static',express.static('static'));//serving static files
app.use(express.urlencoded());

//pug specific 
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views')); //set views directory


//end poits
app.get('/',(req,res)=>{
    res.status(200).render('home.pug')

});



app.get('/news', (req, res) => {
    res.status(200).render('news.pug')
});

app.get('/popular', (req, res) => {
    res.status(200).render('popular.pug')
});

app.get('/about', (req, res) => {
    res.status(200).render('about.pug')
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug')
});





//starting server
app.listen(port, ()=>{
    console.log("the application started sucessfully of port ${port}")
});
