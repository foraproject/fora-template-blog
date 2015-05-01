import isotropyAjax from "isotropy-ajax";
import request from "./request";

let http = request(isotropyAjax.DevModeXMLHttpRequest);
let HttpRequest = isotropyAjax.DevModeXMLHttpRequest;

export {http, HttpRequest };
