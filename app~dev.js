import IsotropyBrowserMode from "isotropy-browser-mode";
import routes from "./routes";
import config from "./config";
import layout from "./lib/layout";
import getDb from "./lib/db-connector";
import data from "./data";

let options = {
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

let isotropy = new IsotropyBrowserMode(options);

let onLoad = function() {
    isotropy.init()
        .then(
            function(result) { console.log(`Blog started.`); },
            function(err) { console.log(err.stack); }
        );
};

if (document.readyState != 'loading'){
    onLoad();
} else {
    document.addEventListener('DOMContentLoaded', onLoad);
}
