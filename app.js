import routes from "./routes";
import config from "./config";
import co from "co";
import Router from "fora-router";
import path from "path";

/*
    Static file routes

*/
var addStaticRoutes = function*(router) {
    router.when(
        function() {
            var path = this.path.split("/");
            return path.length >= 2 && ["public", "js", "vendor", "css", "images", "fonts"].indexOf(path[1]) > -1;
        },
        function*() {
            var path = this.path.split("/");
            switch(path[1]) {
                case "public":
                    yield koaSend(this, this.path, { root: baseConfig.services.file.publicDirectory });
                default:
                    yield koaSend(this.koaRequest, this.path, { root: '../www-client/app/www' });
            }
            return false;
        }
    );
};

var init = function() {
    co(function*() {
        var host = process.argv[2] || config.host || "127.0.0.1";
        var port = process.argv[3] || config.port || 8080;

        /* Init koa */
        var koa = require('koa');
        var app = koa();

        var router = new Router();
        routes.forEach(function(route) {
            router[route.method](route.url, route.handler);
        });
        app.use(router.koaRoute());

        app.listen(port);

        console.log(`Blog is listening on ${host}:${port}`);
    }).then(function() {}, function(err) { console.log(err.stack); });
};

init();
