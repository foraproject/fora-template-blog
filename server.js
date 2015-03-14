import routes from "./routes";


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
