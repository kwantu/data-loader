import { IDataItem } from '../interfaces/default';
export declare function start(): Promise<void>;
export declare function end(): Promise<void>;
export declare function processData(dataArray: IDataItem[]): Promise<void>;
export declare function validateData(dataArray: IDataItem[]): Promise<void>;
export declare function loadData(dataArray: IDataItem[]): Promise<void>;
