'use strict'

import { IDataLoadingArray, IConfig, IOptions, IDataItem } from '../interfaces/default';
import * as existdb from '../ingestors/existdb'

/**
 * 
 * 
 * return {void}
 */
export async function getData(config: IConfig[], dataArray: IDataItem[]) {
    for (let ind = 0; ind < config.length; ind++) {
        let conf = config[ind];
        if (conf.type === 'api' && conf.ingestor === 'existdb') {
            let data: any = await existdb.get(conf.options)
            dataArray.push({
                name: conf.name,
                type: conf.type,
                ingestor: conf.ingestor,
                data: data,
                dataType: conf.dataType
            })
        }
    }
}