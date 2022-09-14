const express = require('express');
const Userlogin = require('../models/LoginUser');
const app = express()
const router = express.Router();


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


// Route 1: Api for login , endpoint will be 
router.get('/login',async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  var success = false;
  console.log(email)
  console.log(password)
  try {
      const user = await Userlogin.findOne({ "email": email });
      console.log(user);
      if (!user) {
          success = false
          res.send({ "success": success, "msg": "Please login with correct Credentials" })
          return
      }
      if (user.password !== password) {
          success = false
          res.send({ "success": success, "msg": "Please login with correct Credentials" })            
          return
      }


      success = "true"
      const token=await user.generateAuthToken()
      console.log(token)
      res.send({ "success": success, "msg": "Succesfully Logged  In","token":token})
  }catch(error){
      console.error(error.message)
      res.send({"success": success, "msg": "Invalid Credentials" })
  }
})




//api for logout


router.get('/logout',authUser,async (req, res) => {
  
  const userId = req.user;
  try {
      const user = await Userlogin.find(userId);
      var newArray = user.tokens.filter(function(token) { return token !== req.auth-token })
      newArray.save()
  }catch(error)
  {

  }
      
})







// api for putting data on  db
router.post('/signUp', async (req, res) => {
  console.log(req)
  const email = req.query.email;
  const password = req.query.password;
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  var success = false;
  console.log(email)
  console.log(password)
  const user = await Userlogin.findOne({ "email": email });
  console.log(user);
  if (user) {
      success = false
      res.send({"success":success, msg: "User Already Exist" })
      return
  }
  success = "true"
  user1 = await Userlogin.create({
     firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
  })

  
 console.log(user1)
  res.send({ "success": success, msg:"Successfully user created"})
})

module.exports=router