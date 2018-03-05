var express = require('express');
var router = express.Router();
var fireAuth = require('../connections/firebase_connect').auth();
var firebaseDb = require('../connections/firebase_admin_connect');
router.get('/', function (req, res) {
  res.render('login', {title: '登入'});
});
router.post('/', function (req, res) {
  var email = req.body.email;
  var password = req.body.passwd;
  fireAuth.signInWithEmailAndPassword(email, password)
    .then(function (user) {
      req.session.uid = user.uid;
      res.redirect('/');
    })
    .catch(function (error) {
      res.redirect('/');
    });
});
module.exports = router;