const express = require('express')
const postRouter = require('./routes/posts')
app = express()
const PORT = 3001

app.use(express.json())

app.listen(PORT, () => {
  `listening on: ${PORT}`
})

app.use('/posts', postRouter)

