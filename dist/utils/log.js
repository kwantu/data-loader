'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
let logger = new (winston.Logger)({
    level: 'debug',
    transports: [
        new (winston.transports.Console)({
            // level: 'debug',
            timestamp: true,
            humanReadableUnhandledException: true,
            colorize: true,
            showLevel: true
        }),
        new (winston.transports.File)({
            // level: 'debug',
            filename: 'logs/loader.log',
            json: false,
            timestamp: true,
            humanReadableUnhandledException: true,
            showLevel: true,
            maxsize: 20000,
            maxFiles: 5,
            tailable: true
        })
    ]
});
function info(message) {
    logger.log('info', message);
}
exports.info = info;
function debug(message) {
    logger.log('debug', message);
}
exports.debug = debug;
function verbose(message) {
    logger.log('verbose', message);
}
exports.verbose = verbose;
function warn(message) {
    logger.log('warn', message);
}
exports.warn = warn;
function error(message) {
    logger.log('error', message);
}
exports.error = error;
//# sourceMappingURL=log.js.map