import * as functions from "firebase-functions";
import {testFunc} from "./function/sdk/v4";

const config = functions.config();

const deployBranch: string = config?.branch.name || "main";

export const sdkV4 = {[deployBranch]: testFunc};
