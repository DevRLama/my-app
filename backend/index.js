const connectToMongo = require('./db')
connectToMongo();
require('dotenv').config({path:"../config/dev.env"})

var cors = require('cors')

const express = require('express')
const app = express()
const port = 8080
const Userlogin = require('./models/LoginUser')


app.use(cors())
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.status(200).json({msg:"Welcome"})
// })






app.use('/api/auth',require('./routes/auth'))
// app.use('/api/emp',require('./routes/emp'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




