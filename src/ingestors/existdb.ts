'use strict'

import * as request from '../utils/request'
import * as log from '../utils/log'
import { IDataItem, IOptions } from '../interfaces/default'

export async function get(options: IOptions): Promise<{}> {
    try {
        log.info('Retrieving document list --> GET http://' + options.hostname + options.endpoint)
        return await request.httpExec({
            hostname: options.hostname,
            port: options.port,
            method: 'GET',
            path: options.endpoint,
            headers: options.headers
        })
    } catch(err){
        log.error(err)
        throw new Error(err)
    }    
}

export function process(dataItem: IDataItem) {
    
}