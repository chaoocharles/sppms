const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  //get the user and add cutom claim (admin)
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made a supervisor.`
      };
    })
    .catch(err => {
      return err;
    });
});

exports.addSuperAdminRole = functions.https.onCall((data, context) => {
  //get the user and add cutom claim (admin)
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        superAdmin: true
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made a co-ordinator.`
      };
    })
    .catch(err => {
      return err;
    });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
