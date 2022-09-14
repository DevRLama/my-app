var jwt = require('jsonwebtoken')
//const JWT_SECRET = "hellobuddyhowareyou"; // Signature 

const authUser = (req, res, next) => {
    //Get the user from the jwt token and add id to req object.
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {

        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        console.log(req.user)
        next();
    } catch (error) { //catch error when input passes validation but database constraint on key not done. 
        console.error(error.message)
        res.status(401).send({ error: "Please authenticate using a valid token" })

    }
}

    module.exports = authUser;