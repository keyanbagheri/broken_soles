var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST

var shoesController = require('../controllers/shoes');

// // http://127.0.0.1:3000/soles
router.route('/shoes')

  //GET all soles
  .get(shoesController.getAll)

  //POST a new blob
  .post(shoesController.createShoe);


router.route('/shoes/:id')

  // GET return specific Sole
  .get(shoesController.getShoe)

  // PATCH update existing Sole
  .patch(shoesController.updateShoe)

  // DELETE remove specific Sole from DB
  .delete(shoesController.removeShoe);


module.exports = router;