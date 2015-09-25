var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var shoesController = require('../controllers/shoes');

// http://127.0.0.1:3000/shoes
router.route('/shoes')

  //GET all shoes
  .get(shoesController.getAll)

  //POST a new blob
  .post(shoesController.createSole);


router.route('/shoes/:id')

  // GET return specific Sole
  .get(shoesController.getShoe)

  // PATCH update existing Sole
  .patch(shoesController.updateShoes)

  // DELETE remove specific Sole from DB
  .DELETE(shoesController.removeShoes);


module.exports = router