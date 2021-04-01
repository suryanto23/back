const jwt = require('jsonwebtoken');
const {JWT_KEY} = require("../config")

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization
 
  // Exception for empty header (not undefined) 
  if (!header) {
    res.json({
      message: "undefined header"
    })
  }

  // Split bearer with token from header, taking token 
  const token = header.split(" ")[1]
  // Exception for empty token (not undefined)
  if (!token) throw new Error("invalid token")
  // Blend token with declared JWT_KEY
  const payload = jwt.verify(token, JWT_KEY)

  // Return Blended Token
  req.payload = payload
  // Function wont break the application
  next()
}

module.exports = verifyToken