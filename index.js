const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') // cái này kết nối giữa back - front
const bodyParser = require('body-parser')
require('dotenv').config()
const apiRouter = require('./router/router')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,                                                                            
    useFindAndModify: false
}).then(()=> console.log('database da ket noi')).catch((err) => console.log(err))

app.use('/api', apiRouter)

app.listen(process.env.PORT, () => console.log('server running in port : 5000'))
