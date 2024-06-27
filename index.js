const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const companyRouter = require('./router/company')
const port = 3000;
const dbServer = "mongodb://localhost:27017"
const cors = require('cors')
const app  = express();
const morgan = require("morgan")
const helmet = require('helmet')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(bodyParser.json())
app.use(cors())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api',companyRouter)
app.use(helmet())
app.use(morgan())

app.listen(port, ()=>{
    try{
        mongoose.connect(dbServer)
        console.info(`Server is running on the http://localhost:${port}`);
    } catch(error){
        console.error("Error: While connecting to the server", error)
        process.exit(1)
    }
})

