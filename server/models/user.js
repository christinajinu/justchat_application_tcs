const mongoose = require('mongoose');
// const mongoose =require("mongoose");
// mongoose.connect('mongodb://localhost:27017/Chatappl');
const db ="mongoose.connect('mongodb+srv://userlocal:userlocal@ruhfileslocal.mzi6m.mongodb.net/areyouhealthylocal?retryWrites=true&w=majority');"
mongoose.connect(db,err => {
    if(err){
        console.error('Error' + err)
    }else{
        console.log('Connected to mongodb')
    }
})


const Schema = mongoose.Schema //to get an instance of mongoose schema
const userSchema = new Schema({
    email: String,
    password: String,
    uname: String
})
var User = mongoose.model('user', userSchema);

module.exports = User;
// module.exports = mongoose.model('user',userSchema)//name of (model,schema,database we have created)