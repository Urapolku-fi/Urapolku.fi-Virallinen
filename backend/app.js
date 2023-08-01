const express = require('express')
const cors = require('cors')
const userRoutes = require('./ src/api/routes/user')
require('dotenv').config()

const app = express()
const port = 3000

app.use(cors())
app.options('*', cors())
app.use(express.json())

app.use('/api/user', userRoutes);


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
