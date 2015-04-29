import getDb from "../lib/db-connector";

export default class Project {

    static *getAll() {
        var db = yield* getDb();
        var collection = yield* db.collection("projects");
        var cursor = yield* collection.find({});
        var projects = yield* cursor.toArray();
        return projects;
    }

    static *getByName(name) {
        var db = yield* getDb();
        var collection = yield* db.collection("projects");
        var project = yield* collection.findOne({ name: name });
        return project;
    }
}
