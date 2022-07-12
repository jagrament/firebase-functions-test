import * as functions from "firebase-functions";

export const testFunc = functions
    .https.onRequest((request, response) => {
      functions.logger.info("Hello!", {structuredData: true});
      response.send("<h1>Hello</h1>");
    });

