const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Route imports
const authRoutes = require('./routes/auth-routes')

const sessionMiddleware = require('./modules/session-middleware')

//Routes
app.use('/auth', authRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})