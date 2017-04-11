'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const https = require("https");
const Q = require("Q");
/**
 * Make an HTTP request
 *
 * @export
 * @param {IOptions} options
 * @param {any} postData
 */
function httpExec(options, postData) {
    const deferred = Q.defer();
    let req = http.request(options, (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            deferred.resolve(body);
        });
    });
    req.on('error', (err) => {
        deferred.reject(err);
    });
    if (postData) {
        req.write(postData);
    }
    req.end();
    return deferred.promise;
}
exports.httpExec = httpExec;
/**
 *
 *
 * @export
 * @param {IOptions} options
 * @param {any} postData
 */
function httpsExec(options, postData) {
    const deferred = Q.defer();
    let req = https.request(options, (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            deferred.resolve(body);
        });
    });
    req.on('error', (err) => {
        deferred.reject(err);
    });
    if (postData) {
        req.write(postData);
    }
    req.end();
    return deferred.promise;
}
exports.httpsExec = httpsExec;
//# sourceMappingURL=request.js.map