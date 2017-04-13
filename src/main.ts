'use strict'

import * as fs from 'fs'
import * as path from 'path'

import { IConfig, IOptions, IDataItem } from './interfaces/default';

import * as ingestor from './ingestors/ingestor'
import * as loader from './processors/loader'
import * as sftp from './utils/sftp'
import * as log from './utils/log'

// import * as database from '@kwantu/database'

const CONFIG_DIR: string = 'artifacts/config'

/**
 * Main function used to execute the data loader process
 * 
 * return {void}
 */
async function main() {
    try {
        // Create a new data loader array
        let dataArray: IDataItem[] = []

        // Register the start of the data loader
        await loader.start()

        // Get the configuration files in artifacts/config
        let config: IConfig[] = JSON.parse(fs.readFileSync(CONFIG_DIR + '/default.json', 'utf8'))

        // Loop through the list of data ingestion types and add the 'raw' data
        // to the dataArray for further processing
        await ingestor.getData(config, dataArray)    

        // If required, sync the SFTP paths and get the required files to process.
        // These files need to be synced to the artifacts/pending folder in order
        // to be processed correctly.
        // await sftp.sync()

        // Log into the database (In this case it would be CouchDB)
        // await database.login()    

        // Process the raw data into the correct format to be loaded into the
        // database.
        await loader.processData(dataArray)

        // Onced processed, validate the data models produced against the relevant
        // data model schemas
        // await loader.validateData(dataArray)

        // Insert the data into the database
        // await loader.loadData(dataArray)

        // Archive the data recieved to be processed
        // await sftp.archive()

        // Register the end of the data loader
        await loader.end()

    } catch(err) {

        // throw new Error(error)
        log.error(err)

    }
}

main()