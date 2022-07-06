import * as functions from "firebase-functions";

export const sayGroot = functions
    .https.onRequest((request, response) => {
      functions.logger.info("Hello Groot!", {structuredData: true});
      response.send("<h1>I am Groot</h1>");
    });

