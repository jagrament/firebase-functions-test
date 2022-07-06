import * as functions from "firebase-functions";
import {sayGroot} from "./function/sdk/v4";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// export const sayGroot = functions.https.onRequest( (request, response) => {
//   functions.logger.info("Hello Groot!", {structuredData: true});
//   response.send("<h1>I am Groot</h1>");
// });

// export const sdkV4 = {[]: sayGroot};
// if(process.env.DEPLOY_BRANCH){

// } else {
// }
// const branch: string =


const config = functions.config();
export const sdkV4 = {[config.branch.name]: sayGroot};
// export const sdkV4 = {[branch]: sayGroot};
