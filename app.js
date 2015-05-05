import Isotropy from "isotropy-koa-mode";
import routes from "./routes";
import config from "./config";
import layout from "./lib/layout";

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

var onError = function(err) {
    console.log(err);
    console.log(err.stack);
};

var isotropy = new Isotropy(options);

isotropy.init()
    .then(
        function(result) { console.log(`Blog started on ${result.host}:${result.port}.`); },
        onError
    );
