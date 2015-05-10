import Isotropy from "isotropy-dev-mode";
import routes from "./routes";
import config from "./config";
import layout from "./lib/layout";
import getDb from "./lib/db-connector";
import data from "./data";

var options = {
    staticDirectories: ["public", "js", "vendor", "css", "images", "fonts"],
    config: config,
    routing: {}
};

if (routes.pages) {
    options.routing.pages = {
        routes: routes.pages,
        layout: layout
    };
}

if (routes.api) {
    options.routing.api = {
        routes: routes.api
    };
}

options.beforeInit = function*() {
    let db = yield* getDb();
    for (let key in data) {
        let collection = yield* db.collection("projects");
        yield* collection.insertMany(data[key]);
    }
};

let isotropy = new Isotropy(options);

var onError = function(err) {
    console.log(err);
    console.log(err.stack);
};

let onLoad = function() {
    isotropy.init()
        .then(
            function(result) { console.log(`Blog started on ${result.host}:${result.port}.`); },
            onError
        );
};

if (document.readyState != 'loading'){
    onLoad();
} else {
    document.addEventListener('DOMContentLoaded', onLoad);
}
