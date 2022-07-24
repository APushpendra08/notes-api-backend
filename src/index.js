const express = require('express')
const app = express()
const noteRoute = require('./routes/noteRoutes')
const userRouter = require("./routes/userRoutes")
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const mongoose = require("mongoose")

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/note", noteRoute)


app.get("/", (req, res) => {
    res.send("Welcome to NotesAPI Backend")
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL)
    .then(() => {

        app.listen(PORT, () => {
            console.log("Server has started at "+ PORT)
        })
        
    })
    .catch((error) => confirm.log(error))
