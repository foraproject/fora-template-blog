import IsotropyKoa from "isotropy-koa-mode";
import routes from "./routes";
import config from "./config";
import layout from "./layout";

var options = {
    staticDirectories: ["public", "js", "vendor", "css", "images", "fonts"],
    config: config,
    routes: routes,
    layout: layout
};

var isotropy = new IsotropyKoa(options);

isotropy.init()
    .then(
        function(result) { console.log(`Blog started on ${result.host}:${result.port}.`); },
        function(err) { console.log(err.stack); }
    );
