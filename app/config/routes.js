var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var shoesController = require('../controllers/shoes');

  //GET all shoes
  router.get('/shoes', shoesController.getAll());

  //POST a new blob
  router.post('/shoes', shoesController.createShoe());

  // GET return specific Sole
  router.get('/shoes/:id', shoesController.getShoe());

  // PATCH update existing Sole
  router.patch('/shoes/:id', shoesController.updateShoes());

  // DELETE remove specific Sole from DB
  router.delete('/shoes/:id', shoesController.removeShoes());


module.exports = router;