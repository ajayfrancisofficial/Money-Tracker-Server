const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("inside jwtMiddleware");
    try {
        const token = req.headers.authorization.split(" ")[1]
        // console.log(token);
        if (token) {
            const jwtResponse = jwt.verify(token, process.env.JWT_SECRET_KEY)
            console.log(jwtResponse);
            req.payload=jwtResponse.userId
            next()
        } else {
                res.status(406).json("Please provide Token")
        }
    }catch{
        res.status(401).json("Access Denied... Please Log in!!!")
    }
}
module.exports=jwtMiddleware
