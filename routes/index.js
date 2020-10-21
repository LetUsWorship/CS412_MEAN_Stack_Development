const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res,next) {
  res.render('index', { title: 'Wanna Hear a Potassium Joke?' });
});

module.exports = router;
