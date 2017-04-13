'use strict'

import * as parser from 'xml2json'

export interface IOptions {
    object?: boolean,
    reversible?: boolean,
    coerce?: boolean,
    sanitize?: boolean,
    trim?: boolean,
    arrayNotation?: boolean
    alternateTextNode?: boolean
}

export function xmlToJSON(xml: string, options: IOptions){
    return parser.toJson(xml)
}