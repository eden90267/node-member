var firebase = require('firebase');

// Firebase console / Project Overview / 將 Firebase 加入您的網路應用程式
var config = require('../../project-29c37-firebase-config');
firebase.initializeApp(config);

module.exports = firebase;
