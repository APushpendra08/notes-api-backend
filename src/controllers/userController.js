const userModel = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
let SECRET_KEY = process.env.SECRET_KEY


const signUp = async (req, res) => {
    
    const {username, password, email} = req.body
    SECRET_KEY = process.env.SECRET_KEY

    try {

        const existingUser = await userModel.findOne({email : email})
        if(existingUser){
            res.status(400).json(
                {
                    status : false, 
                    message : "User already exists"
                })
        } else {

            const hashedPassword = await bcrypt.hash(password, 10)

            const result = await userModel.create({
                email : email,
                password : hashedPassword,
                username : username
            })

            const token = jwt.sign({email : result.email, id : result._id}, SECRET_KEY)

            res.status(200).json({user : result, token : token, status : true})
        }

    
    } catch(error){
        console.log(error)
        res.status(500).json({message : "Something went wrong"})
    }
}

const signIn = async ( req, res) => {
    const {email, password} = req.body

    SECRET_KEY = process.env.SECRET_KEY

    try{

        const existingUser = await userModel.findOne({email : email})

        if(!existingUser){
            res.status(404).json({"status" : false, message : "User not found"}) } 
        else {

            const matchPassword = await bcrypt.compare(password, existingUser.password)

            if(!matchPassword)
                res.status(404).json({"status" : false, message : "Invalid credentials"})

            const token = jwt.sign({email : existingUser.email, id : existingUser._id}, SECRET_KEY)

            res.status(200).json({user : existingUser, token : token , status : true})
        }

    } catch(error){
        console.log(error)
        res.status(500).json({message : "Something went wrong"}) 
    }
}

module.exports = {signUp, signIn}