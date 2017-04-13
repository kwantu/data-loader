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
const existdb = require("../ingestors/existdb");
/**
 *
 *
 * return {void}
 */
function getData(config, dataArray) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let ind = 0; ind < config.length; ind++) {
            let conf = config[ind];
            if (conf.type === 'api' && conf.ingestor === 'existdb') {
                let data = yield existdb.get(conf.options);
                dataArray.push({
                    name: conf.name,
                    type: conf.type,
                    ingestor: conf.ingestor,
                    data: data,
                    dataType: conf.dataType
                });
            }
        }
    });
}
exports.getData = getData;
//# sourceMappingURL=ingestor.js.map