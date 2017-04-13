export interface IDataLoadingArray {
    wrapper: any;
}
export interface IOptions {
    hostname: string;
    port: number;
    endpoint?: string;
    headers: any;
    path?: string;
    method?: string;
}
export interface IConfig {
    name: string;
    description: string;
    type: string;
    options: IOptions;
    dataType: string;
    ingestor: string;
}
export interface IConfig extends Array<IConfig> {
}
export interface IDataItem {
    name: string;
    type: string;
    ingestor: string;
    data: any;
    dataType: string;
}
