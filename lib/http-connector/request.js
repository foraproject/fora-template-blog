export default function(HttpRequest) {
    return function*(fn) {
        var promise = new Promise(function(resolve, reject) {
            var request = new HttpRequest();
            request.onload = function() {
                if ((request.status >= 200 && request.status < 300) || request.status == 304 || request.status == 1223) {
                    resolve(request.responseText);
                } else {
                    reject(request.statusText);
                }
            };
            request.onerror = function() {
                reject(new Error("Network Error"));
            };
            fn(request);
        });
        return yield promise;
    };
}
