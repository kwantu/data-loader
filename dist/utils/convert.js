'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const parser = require("xml2json");
function xmlToJSON(xml, options) {
    return parser.toJson(xml);
}
exports.xmlToJSON = xmlToJSON;
//# sourceMappingURL=convert.js.map