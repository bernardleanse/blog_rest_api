const express = require('express')
app = express()
const PORT = 3001

app.use(json())

app.listen(PORT, () => {
  `listening on: ${PORT}`
})

app.use('/posts', postRouter)

