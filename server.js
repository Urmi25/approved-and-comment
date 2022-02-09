const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes/user.js')
const blogroutes = require('./routes/blog')

app.use(express.json());

app.use(routes )
app.use(blogroutes);

app.get('*',(req,res)=>{
    res.status(400).send("Api Not Found");
})
//database connection
mongoose.connect('mongodb://localhost:27017/userblog')
.then(()=> console.log('database connected'))
.catch((err)=>('err'))
const port =  4000;
app.listen(port,()=> console.log('Server is listening in port', port));














// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// const routes = require('./routes/user');

// app.use(routes);
// app.get('*',(req,res)=>{
//     res.status(400).send("Api Not Found");
// })
// mongoose.connect('mongodb://localhost:27017/userblog')
// .then(()=> console.log('database connected'))
// .catch((err)=>('err'))
// const port = 4000;
// app.listen(port, ()=> console.log('Server is listening in port',port));