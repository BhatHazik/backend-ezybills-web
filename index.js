const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerHandler = require('./controllers/handllers');
const loginHandler = require('./controllers/handllers');


const app = express();
const port = 4000;
const url = 'mongodb://localhost:27017/EzybillsWeb';


app.use(bodyParser.json());
app.use(cors());



try{
    const mongoConnect = mongoose.connect(url);
    if(connect){
        console.log('dataBase is connected successfully');
    }
    else{
        console.log('something is not right');
    }
}
catch(error){
    console.log(error);
}



app.post('/register' , registerHandler);
app.post('/login', loginHandler);


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})

