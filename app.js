import babel from "babel";
import routes from "./routes";
import config from "./config";
import co from "co";
import layout from "./layout";
import Isotropy from "isotropy";

var init = function() {
    co(function*() {
        var host = process.argv[2] || config.host || "127.0.0.1";
        var port = process.argv[3] || config.port || 8080;

        /* Init koa */
        var koa = require('koa');
        var app = koa();

        var isotropy = new Isotropy();
        isotropy.addStaticDirectories(["public", "js", "vendor", "css", "images", "fonts"], config.destination);
        isotropy.addPageRoutes(routes.pages, layout);
        yield* isotropy.init();

        app.use(isotropy.koaRoute());

        app.listen(port);

        console.log(`Blog is listening on ${host}:${port}`);
    }).then(function() {}, function(err) { console.log(err.stack); });
};

init();
