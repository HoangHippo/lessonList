const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) =>{
    const authHeader = req.header('Authorization')
    // Remove name after token
    const token = authHeader && authHeader.split(' ')[1]

    if(!token)
    return res.status(401).json({success:false, message:'Access token not found'})
}