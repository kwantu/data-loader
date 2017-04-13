'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const log = require("../utils/log");
const convert = require("../utils/convert");
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        log.info('Loader run started...');
    });
}
exports.start = start;
function end() {
    return __awaiter(this, void 0, void 0, function* () {
        log.info('Loader run ended.');
    });
}
exports.end = end;
function processData(dataArray) {
    return __awaiter(this, void 0, void 0, function* () {
        // Convert the data to to JSON
        for (let ind = 0; ind < dataArray.length; ind++) {
            let item = dataArray[ind];
            let processType;
            if (item.dataType === 'XML' || item.dataType === 'xml') {
                let strJSON = convert.xmlToJSON(item.data, {
                    object: false,
                    sanitize: true,
                    trim: true,
                    arrayNotation: false
                });
                item.data = JSON.parse(strJSON);
                if (item.data['exist:result']['exist:collection']) {
                    processType = 'collection';
                }
                log.debug('processType: ' + processType);
            }
        }
    });
}
exports.processData = processData;
function validateData(dataArray) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.validateData = validateData;
function loadData(dataArray) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.loadData = loadData;
//# sourceMappingURL=loader.js.map