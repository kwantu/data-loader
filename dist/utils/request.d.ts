/// <reference types="q" />
import * as Q from 'Q';
import { IOptions } from '../interfaces/default';
/**
 * Make an HTTP request
 *
 * @export
 * @param {IOptions} options
 * @param {any} postData
 */
export declare function httpExec(options: IOptions, postData?: any): Q.Promise<{}>;
/**
 *
 *
 * @export
 * @param {IOptions} options
 * @param {any} postData
 */
export declare function httpsExec(options: IOptions, postData: any): Q.Promise<{}>;
