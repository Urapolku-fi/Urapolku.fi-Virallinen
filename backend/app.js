
const express = require('express')
const cors = require('cors')
const {expressjwt: jwt} = require('express-jwt');
const expressJwtSecret = require('jwks-rsa');
require('dotenv').config()

const app = express()
const port = 3000

app.use(cors())
app.options('*', cors())
app.use(express.json())

const checkJwt = jwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_BASE_URL}.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_BASE_URL,
  algorithms: ['RS256'],
});

app.post('/api/user/create', function(req, res) {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
