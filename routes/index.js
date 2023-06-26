var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});

/* GET Contact Me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'contactme' });
});

module.exports = router;
