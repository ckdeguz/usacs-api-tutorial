var express = require('express');
var router = express.Router();

// GET users listing.
router.get('/', function(req, res, next) {
  res.send('Users list here');
});

// GET a user
router.get('/:id', function(req, res, next) {
  res.send(`User ${req.params.id}`);
});

// POST a new user
router.post('/', function(req, res, next) {
  res.send('created a new user');
});

// DELETE a user
router.delete('/:id', function(req, res, next) {
  res.send(`User ${req.params.id} deleted`);
});

// UPDATE a user
router.put('/:id', function(req, res, next) {
  res.send(`User ${req.params.id} updated`);
});

module.exports = router;
