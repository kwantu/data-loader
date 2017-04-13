'use strict'

import * as fs from 'fs'
import * as path from 'path'
import * as winston from 'winston'
import * as chalk from 'chalk'

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
})

export function info(message?: string){
    logger.log('info', message)
}

export function debug(message?: string){
    logger.log('debug', message)
}

export function verbose(message?: string){
    logger.log('verbose', message)
}

export function warn(message?: string){
    logger.log('warn', message)
}

export function error(message?: string){
    logger.log('error', message)
}