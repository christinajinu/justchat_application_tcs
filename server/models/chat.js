const mongoose = require('mongoose');
// const mongoose =require("mongoose");
// mongoose.connect('mongodb://localhost:27017/Chatappl');
const db ="mongoose.connect('mongodb+srv://userlocal:userlocal@ruhfileslocal.mzi6m.mongodb.net/areyouhealthylocal?retryWrites=true&w=majority');"
mongoose.connect(db,err => {
    if(err){
        console.error('Error' + err)
    }else{
        console.log('Connected chat to mongodb')
    }
})


const Schema = mongoose.Schema //to get an instance of mongoose schema
const chatSchema = new Schema({
    sender: String,
    reciever: String,
    message: String,
    updated_at:{type:Date,default:Date.now},
});
var chat = mongoose.model('message',chatSchema);

module.exports = chat;
// module.exports = mongoose.model('chat',chatSchema)