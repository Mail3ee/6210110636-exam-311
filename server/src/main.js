const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8080
const app = express()

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})