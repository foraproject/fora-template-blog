import backend from "ceramic-backend-nedb";
import config from "../../config";

var getDb = function*() {
    return yield* backend.NeDBClient.connect();
};

export default getDb;
