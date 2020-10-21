const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.render('ps3', {String: 'I ate a clock yesterday, it was very time-consuming.'});
});


router.post('/', function(req, res, next) {
    let returnStr = req.body.string;
    const postStr = {String: returnStr, length: returnStr.length};
    res.render('ps3', postStr);

});

module.exports = router;