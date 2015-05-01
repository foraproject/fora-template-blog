import backend from "ceramic-backend-nedb";
import config from "../../config";

let db;
let getDb = function*() {
    if (!db) {
        db = yield* backend.NeDBClient.connect();
    }
    return db;
};

export default getDb;
