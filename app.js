
require('dotenv').config();
const express = require('express');

require('./driver/mogo-connection');

const productRouter = require('./routes/products-routes');
const ventasRouter = require('./routes/ventas-routes');

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/api/producto', productRouter);
app.use('/api/venta', ventasRouter);

app.listen(port, function () {
    console.log(`El servidor está listo en el puerto: ${port}!`);
})
