import Isotropy from "isotropy-browser-mode";
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

var onError = function(err) {
    console.log(err);
    console.log(err.stack);
};

let isotropy = new Isotropy(options);

let onLoad = function() {
    isotropy.init()
        .then(
            function() {
                console.log(`Blog started.`);
            },
            onError
        );
};

if (document.readyState != 'loading'){
    onLoad();
} else {
    document.addEventListener('DOMContentLoaded', onLoad);
}
