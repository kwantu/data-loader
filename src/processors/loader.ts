'use strict'

import * as fs from 'fs'
import * as path from 'path'

import { IDataItem } from '../interfaces/default';
import * as existdb from '../ingestors/existdb'
import * as log from '../utils/log'
import * as convert from '../utils/convert'

export async function start(){
    log.info('Loader run started...')
}

export async function end(){
    log.info('Loader run ended.')
}

export async function processData(dataArray: IDataItem[]){
    // Convert the data to to JSON
    for (let ind = 0; ind < dataArray.length; ind++) {
        let item = dataArray[ind]
        let processType: string        
        if (item.dataType === 'XML' || item.dataType === 'xml') {
            let strJSON: string = convert.xmlToJSON(item.data, {
                object: false,
                sanitize: true,
                trim: true,
                arrayNotation: false
            })
            item.data = JSON.parse(strJSON)
            if (item.data['exist:result']['exist:collection']) {
                processType = 'collection'
            }
            log.debug('processType: ' + processType)
        }   
    }
}

export async function validateData(dataArray: IDataItem[]){
    
}

export async function loadData(dataArray: IDataItem[]){
    
}
