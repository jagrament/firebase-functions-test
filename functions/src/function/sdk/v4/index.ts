import * as functions from "firebase-functions";

const config = functions.config();

export const testFunc = functions
    .https.onRequest((request, response) => {
      functions.logger.info("Hello!", {structuredData: true});
      response.send(`<h1>Hello ${config?.branch.name}</h1>`);
    });

