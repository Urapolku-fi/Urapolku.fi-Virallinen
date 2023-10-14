const { expressjwt: jwt } = require('express-jwt');
const { expressJwtSecret } = require('jwks-rsa');
require('dotenv').config();

const checkJwt = jwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_BASE_URL}.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer
  audience: `${process.env.AUTH0_AUDIENCE}`,
  issuer: process.env.AUTH0_BASE_URL,
  algorithms: ['RS256'],
});

module.exports = checkJwt;
