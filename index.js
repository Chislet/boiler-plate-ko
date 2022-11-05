const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chislet012:00yyss99@cluster0.23lf1wa.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => 
  res.send('Hello World! 안녕하세오~~'))

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))