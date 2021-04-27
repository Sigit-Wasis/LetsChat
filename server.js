const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname))

var messages = [
    { name: "sigit", message: "hello" },
    {name: "wasis", message: "hi"}
]

app.get('/messages', (req, res) => {
    res.send(messages)
  })
  

app.listen(port, () => {
  console.log(`LetsChat listening at http://localhost: ${port}`)
})