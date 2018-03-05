var admin = require("firebase-admin");

// Firebase console / Project Overview / 專案設定 / 服務帳戶 / 產生新的私密金鑰
var serviceAccount = require("../../project-29c37-firebase-adminsdk-68is7-1455c9a079.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-29c37.firebaseio.com"
});

var db = admin.database();

module.exports = db;