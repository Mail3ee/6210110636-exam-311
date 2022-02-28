const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8080
const app = express()

let serverNumber = 0

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.post('/api/inc', bodyParser.json(), (req, res) =>{
    serverNumber = serverNumber + 1
    console.log('Server Num : ' + serverNumber)
    res.send({number: serverNumber})
})

app.post('/api/ref', (req, res) =>{
    console.log('Refresh Number : ' + serverNumber)
    res.send({number: serverNumber})
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})