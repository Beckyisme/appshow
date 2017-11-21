var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
	req.url = '/index.html';
	next();
});

app.use(router);

var appData = require('./data.json')
var goods = appData.goods
var topic = appData.topic
var people = appData.people
var favourable = appData.favourable
var me = appData.me
var apiRoutes = express.Router()

apiRoutes.get('/goods', function (req, res) {
    res.json({
        errno: 0,
        data: goods
    })
})
apiRoutes.get('/topic', function (req, res) {
    res.json({
        errno: 0,
        data: topic
    })
})
apiRoutes.get('/people', function (req, res) {
    res.json({
        errno: 0,
        data: people
    })
})
apiRoutes.get('/favourable', function (req, res) {
    res.json({
        errno: 0,
        data: favourable
    })
})
apiRoutes.get('/me', function (req, res) {
    res.json({
        errno: 0,
        data: me
    })
})
app.use('/api', apiRoutes)

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});