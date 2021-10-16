const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true
}).then(db => console.log('DB is conected'))
.catch(err => console.log(err))

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () =>{
    console.log(`Localhost:${app.get('port')}`);
})