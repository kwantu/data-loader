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
const fs = require("fs");
const ingestor = require("./ingestors/ingestor");
const loader = require("./processors/loader");
const log = require("./utils/log");
// import * as database from '@kwantu/database'
const CONFIG_DIR = 'artifacts/config';
/**
 * Main function used to execute the data loader process
 *
 * return {void}
 */
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create a new data loader array
            let dataArray = [];
            // Register the start of the data loader
            yield loader.start();
            // Get the configuration files in artifacts/config
            let config = JSON.parse(fs.readFileSync(CONFIG_DIR + '/default.json', 'utf8'));
            // Loop through the list of data ingestion types and add the 'raw' data
            // to the dataArray for further processing
            yield ingestor.getData(config, dataArray);
            // If required, sync the SFTP paths and get the required files to process.
            // These files need to be synced to the artifacts/pending folder in order
            // to be processed correctly.
            // await sftp.sync()
            // Log into the database (In this case it would be CouchDB)
            // await database.login()    
            // Process the raw data into the correct format to be loaded into the
            // database.
            yield loader.processData(dataArray);
            // Onced processed, validate the data models produced against the relevant
            // data model schemas
            // await loader.validateData(dataArray)
            // Insert the data into the database
            // await loader.loadData(dataArray)
            // Archive the data recieved to be processed
            // await sftp.archive()
            // Register the end of the data loader
            yield loader.end();
        }
        catch (err) {
            // throw new Error(error)
            log.error(err);
        }
    });
}
main();
//# sourceMappingURL=main.js.map