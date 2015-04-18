import backend from "ceramic-backend-mongodb";
import config from "../../config";

var getDb = function*() {
    return yield* backend.MongoClient.connect({ database: config.database });
};

export default getDb;
