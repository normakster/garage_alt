//const gapi = require('./client.js');
// const util = require('./utilController');
// const { MongoClient } = require('mongodb');
// const os = require("os");
// const debug = require('debug')('app:authController');


// exports.loginUser = async function (req, res) {
//   try {
//     const dbParams = await util.setupDB();
//     const tasks = await dbParams.collection.find({}).sort({ dueDate: 1 }).toArray();
//     const hostname = os.hostname();
//     res.render('showTasks', { tasks, title: 'ToDo List', hostname });
//     dbParams.client.close();
//   }
//
//   catch (err) {
//     debug(err);
//   }
// }
//
// exports.saveTask = async (req, res) => {
//   try {
//     const task = req.body;
//     const dbParams = await util.setupDB();
//     await dbParams.collection.insertOne(task);
//     dbParams.client.close();
//     res.redirect('/');
//   }
//
//   catch(err) {
//     debug(err);
//   }
// }

function test_login() {
  var username = document.forms["myForm"]["username"].value;
  var pwd = document.forms["myForm"]["pwd"].value;
  alert("Username = " + username)
  console.log("Username = " + username);
  console.log("Password = " + pwd);
}


var auth;

function initLogin() {

  gapi.load('auth2', function() {
    auth = gapi.auth2.init({
        client_id: "773135597766-ofk2e5lehiv3tabtmppq7prutqaifgbj.apps.googleusercontent.com",
        scope: "profile email" // this isn't required
    });

    console.log( "signed in: " + auth.isSignedIn.get() );
    auth.isSignedIn.listen(onSignIn);
    var button = document.getElementById('signInButton');
    button.addEventListener('click', function() {
      auth.signIn();
    });
    var out = document.getElementById('signOutButton');
    out.addEventListener('click', function() {
      auth.signOut().then(function() {
        console.log("user signed out");
      });
    });
  });
       // });
}

function onSignIn(googleUser) {
  console.log( "signedin");
  console.log(googleUser);
  // Useful data for your client-side scripts:
  var profile = auth.currentUser.get().getBasicProfile();
  console.log("Name: " + profile.getName());
};
