const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();
app.use(express.json());


app.use(cors());

const TodoItemRoute = require('./routes/todo');


mongoose.connect("mongodb+srv://todo:todo@1234@todolist01.6cvqcmw.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);



//connect to server
app.listen(5000, ()=> console.log("Server connected to 5000") );
