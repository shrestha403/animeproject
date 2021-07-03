// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jagadishcart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we are connected");
});



const jagadishcartSchema = new mongoose.Schema({
    name: String
    
});

jagadishcartSchema.methods.speak = function () {
    const greeting = this.name
        
    console.log("my name is"+greeting);
}


const cat = mongoose.model('maggy', jagadishcartSchema);

const jaggu = new cat({ name: 'doraemon' });
// console.log(jaggu.name); 
// jaggu.speak();


jaggu.save(function (err, jaggu) {
    if (err) return console.error(err);
    jaggu.speak();
});


cat.find(function (err, maggies) {
    if (err) return console.error(err);
    console.log(maggies);
})