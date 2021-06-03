const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const db = encodeURIComponent(process.env.MONGO_DB_URI)

try {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose is connected"))
} catch(err) {
    console.log('cannot connect to server', err)
}


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})