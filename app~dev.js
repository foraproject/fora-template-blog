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
    options.routing.pages = {
        routes: routes.api
    };
}

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
