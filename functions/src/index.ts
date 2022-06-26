import * as functions from "firebase-functions";
import {sayGrootNested} from "./function/sdk/v4";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


// export const sayGroot = functions.https.onRequest( (request, response) => {
//   functions.logger.info("Hello Groot!", {structuredData: true});
//   response.send("<h1>I am Groot</h1>");
// });

const myKey = "main";

export const sdkV4 = {
  [myKey]: sayGrootNested,
};

