var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var shoesController = require('../controllers/soles');

// http://127.0.0.1:3000/soles
router.route('/soles')

  //GET all soles
  .get(shoesController.getAll)

  //POST a new blob
  .post(shoesController.createSole);


router.route('/soles/:id')

  // GET return specific Sole
  .get(solesFrom.kitchen :)

  // PATCH update existing Sole
  .patch(shoesController.updateSole)

  // DELETE remove specific Sole from DB
  .DELETE(shoesController.removeSole);


module.exports = router