import backend from "ceramic-backend-mongodb";
import config from "../../config";

let db;
let getDb = function*() {
    if (!db) {
        db = yield* backend.MongoClient.connect({ database: config.database });
    }
    return db;
};

export default getDb;
