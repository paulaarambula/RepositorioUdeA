require('dotenv').config();
//
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
//
const chalk = require('chalk')

const app = express()

const ventasRouter = require('./routers/venta-router')
const usersRouter = require('./routers/user-router');
const productosRouter = require('./routers/producto-router');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true
}).then(db => console.log('DB is conected'))
.catch(err => console.log(err))


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//app.use(mongoose())
/*mongoose.connect('mongodb://localhost',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
   })*/

   /*const db = mongoose.connection;
   db.once("open", (_) => {
     console.log("Database connected:", process.env.MONGODB_URL);
   });
   
   db.on("error", (err) => {
     console.error("connection error:", err);
   });*/

app.use('/venta', ventasRouter);
app.use('/user', usersRouter);
app.use('/producto', productosRouter);

app.get('*', (request, response) => {
    return response.send('Not found!');
});

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () =>{
    console.log(`Localhost:${app.get('port')}`);
})