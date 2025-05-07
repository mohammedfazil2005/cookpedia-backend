const jwt = require('jsonwebtoken')

const jwtMiddlware = async (req, res, next) => {

    const token = req.headers['authorization'].split(" ")[1]
    if (token) {
        try {
            const jwtResponce = jwt.verify(token, process.env.SUPERSECRETKEY)
            req.userID=jwtResponce.userID
            next()
        } catch (error) {
            res.status(400).json("Invalid token")
        }

    } else {
        res.status(400).json("Token required")
    }

}

module.exports=jwtMiddlware