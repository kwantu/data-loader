'use strict'

import * as http from 'http'
import * as https from 'https'
import * as Q from 'Q'

import { IOptions } from '../interfaces/default'

/**
 * Make an HTTP request
 * 
 * @export
 * @param {IOptions} options
 * @param {any} postData
 */
export function httpExec(options: IOptions, postData?: any): Q.Promise<{}> {
    const deferred = Q.defer();
    let req = http.request(options, (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            deferred.resolve(body)
        });
    })
    req.on('error', (err) => {
        deferred.reject(err)
    })
    if (postData) {
        req.write(postData)
    }
    req.end();
    return deferred.promise;
}

/**
 * 
 * 
 * @export
 * @param {IOptions} options
 * @param {any} postData
 */
export function httpsExec(options: IOptions, postData: any){
    const deferred = Q.defer();
    let req = https.request(options, (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            deferred.resolve(body)
        });
    })
    req.on('error', (err) => {
        deferred.reject(err)
    })
    if (postData) {
        req.write(postData)
    }
    req.end();
    return deferred.promise;
}