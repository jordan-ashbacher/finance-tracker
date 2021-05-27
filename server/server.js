import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})