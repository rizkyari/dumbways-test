const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()
const port = 2022 // akses dari environment

app.get('/', (req, res) => {
    res.send(`<h1> API RUNNING ON PORT ${port} </h1>`)
})

app.use(cors())
app.use(express.json())
app.use(router)


app.listen(port, ()=>{
    console.log("Running on port:", port);
    
})