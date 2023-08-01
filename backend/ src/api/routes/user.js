const express = require('express');
const router = express.Router();

router.post('/create', function(req, res) {
  res.send("createUser ok")
})

module.exports = router;