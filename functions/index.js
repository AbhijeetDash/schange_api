/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialization of firebase app
const app = admin.initializeApp();

// Getting firestore instance
const firestore = admin.firestore();

/**
 * Validates the API Key.
 * @param {string} clientApiKey The Api Key that the client has.
 * @return {boolean} The sum of the two numbers.
 */
function isVerifiedApiUser(clientApiKey) {
  if (clientApiKey == "lNsu201037cwQecWRac7") {
    return true;
  } else {
    return false;
  }
}

exports.sendInvoiceToUser = functions.https.onRequest((request, response) => {
  const data = request.body;
  const clientApiKey = data.api;
  const verified = isVerifiedApiUser(clientApiKey);
  if (verified) {
    return response.send({
      "verification": verified,
    });
  } else {
    return response.send({
      "error": "verification_failed",
      "description": "please make sure to renew your key.",
    });
  }
});
