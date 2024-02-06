require('dotenv').config()
const express = require('express')
// import express from "express" line 1 == 2
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('iviraj')
})

app.get('/login',(req, res)=>{
    res.send("<h1>Hello Login</h1>")
})

app.get('/youtube',(req, res)=>{
    res.send("JS Backend")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})