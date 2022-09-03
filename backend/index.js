const connectToMongo = require('./db')
connectToMongo();
var cors = require('cors')

const express = require('express')
const app = express()
const port = 5000
const Userlogin = require('./models/LoginUser')


app.use(cors())
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.status(200).json({msg:"Welcome"})
// })


// respond with "hello world" when a GET request is made to the homepage
app.get('/login', async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    var success = false;
    console.log(email)
    console.log(password)
    try {
        const user = await Userlogin.find({ "email": email });
        console.log(user);
        if (!user) {
            success = false
            res.status(404).send({ error: "Logged in with email Credentials" })
            return
        }
        if (user.password !== password) {
            success = false
            res.status(404).send({ error: "Logged in with Correct Pa"  })
            return
        }

        success = "true"
        res.send({ "success": success, "msg": "Succesfully Logged  In" })
    }catch(error){
        console.error(error.message)
        res.status(400).send('Some error occured')
    }
  })




// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/emp',require('./routes/emp'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// api for putting data on  db
app.post('/signUp', async (req, res) => {
    console.log(req)
    const email = req.query.email;
    const password = req.query.password;
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    var success = false;
    console.log(email)
    console.log(password)
    const user = await User.findOne({ "email": email });
    console.log(user);
    if (user) {
        success = false
        res.status(404).json({ msg: "User Exist" })
        return
    }
    success = "true"
    user1 = await User.create({
       firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })

    
   console.log(user1)
    res.send({ "success": success, response })
})

