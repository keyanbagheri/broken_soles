var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST

var shoesController = require('../controllers/shoes');

// // http://127.0.0.1:3000/soles
// router.route('/shoes')

  //GET all soles
  router.get('/shoes', shoesController.getAll);

  //POST a new blob
  router.post('/shoes', shoesController.createShoe);


// router.route('/shoes/:id')

  // GET return specific Sole
  router.get('/shoes/:id', shoesController.getShoe);

  // PATCH update existing Sole
  router.patch('/shoes/:id', shoesController.updateShoe);

  // DELETE remove specific Sole from DB
  router.delete('/shoes/:id', shoesController.removeShoe);


module.exports = router;