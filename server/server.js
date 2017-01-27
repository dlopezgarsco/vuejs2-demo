var express = require('express'); // call express
var cors = require('cors')
var app = express(); // define our app using express
var bodyParser = require('body-parser');

app.use(cors())
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

const seats = {
  quantity: 40,
  rowsQuantity: 4,
  disabledAvailability: true,
  ascendant: true,
  rows: [{
    letter: 'A',
    seats: 10,
    taken: [1, 3, 4, 5, 9, ],
  }, {
    letter: 'B',
    seats: 10,
    taken: [1, 3, 4, 5, 9, ],
  }, {
    letter: 'C',
    seats: 10,
    taken: [1, 3, 4, 5, 9, ],
  }, {
    letter: 'D',
    seats: 10,
    taken: [1, 3, 4, 5, 9, ],
    disabled: [1, 10]
  }, ],
};

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/seats', function (req, res) {
  res.json({ seats });
});

// more routes for our API will happen here
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use(express.static(__dirname + '/public'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
