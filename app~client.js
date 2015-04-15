import IsotropyBrowserMode from "isotropy-browser-mode";
import routes from "./routes";
import config from "./config";
import layout from "./layout";

var options = {
    staticDirectories: ["public", "js", "vendor", "css", "images", "fonts"],
    config: config,
    routing: {
        pages: {
            routes: routes.pages,
            layout: layout
        }
    }
};

var isotropy = new IsotropyBrowserMode(options);

isotropy.init()
    .then(
        function(result) { console.log(`Blog started on ${result.host}:${result.port}.`); },
        function(err) { console.log(err.stack); }
    );
