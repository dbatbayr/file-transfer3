require('dotenv').config();
const mongoose = require('mongoose');
const url = "mongodb+srv://54321Boldoo:54321Boldoo@batbayr112.nndq93c.mongodb.net/file_transfer";
function connectDB() 
{
    //data base holboh heseg 
    mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => 
    {
        console.log('data base holbogdloo');
    }).catch(err => 
    {
        console.log('DB holboltiin aldaa ');
    });
}


module.exports = connectDB;