import request from "./request";
import IsotropyXMLHttpRequest from "isotropy-xml-http-request";

let http = request(IsotropyXMLHttpRequest);
let HttpRequest = IsotropyXMLHttpRequest;

export {http, HttpRequest };
