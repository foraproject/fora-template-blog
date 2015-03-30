import babel from "babel";
import routes from "./routes";
import config from "./config";
import co from "co";
import Isotropy from "isotropy";

var init = function() {
    co(function*() {
        var host = process.argv[2] || config.host || "127.0.0.1";
        var port = process.argv[3] || config.port || 8080;

        /* Init koa */
        var koa = require('koa');
        var app = koa();

        var staticDirectories = ["public", "js", "vendor", "css", "images", "fonts"];
        var isotropy = new Isotropy({ routes, staticDirectories });
        yield* isotropy.init();

        app.use(isotropy.koaRoute());

        app.listen(port);

        console.log(`Blog is listening on ${host}:${port}`);
    }).then(function() {}, function(err) { console.log(err.stack); });
};

init();
