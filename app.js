import IsotropyKoaMode from "isotropy-koa-mode";
import routes from "./routes";
import config from "./config";
import layout from "./layout";

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

var isotropy = new IsotropyKoaMode(options);

isotropy.init()
    .then(
        function(result) { console.log(`Blog started on ${result.host}:${result.port}.`); },
        function(err) { console.log(err.stack); }
    );
