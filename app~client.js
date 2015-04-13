import Isotropy from "isotropy";
import routes from "./routes";
import config from "./config";
import layout from "./layout";

var isotropy = new Isotropy();

isotropy.init({
    staticDirectories: ["public", "js", "vendor", "css", "images", "fonts"],
    config: config,
    routes: routes,
    layout: layout,
    cb: function(result) { console.log(`Blog started on ${result.host}:${result.port}.`); }
}).then(function() {}, function(err) { console.log(err.stack); });
