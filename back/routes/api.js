var express = require('express');
var router = express.Router();

/* GET marks listing. */
router.get('/marks', function(req, res, next) {
    var db = req.db;
    var collection = db.get('marks');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.post('/marks', function(req, res) {
    var db = req.db;
    var collection = db.get('marks');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? req.body  : { msg: err }
        );
    });
});

module.exports = router;