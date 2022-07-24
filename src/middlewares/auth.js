const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI"

const auth = (req, res, next) => {
    try{

        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1]
            let user = jwt.verify(token, SECRET_KEY)
            console.log("UserID", user)
            req.userId = user.id


        } else {
            return res.status(401).json({status : false, message : "Unauthorized user"})
        }

        next()

    } 
    catch(error) {
        console.log(error)
        res.status(401).json({status : false, message : "Unauthorized user"})
    }
}

module.exports = auth