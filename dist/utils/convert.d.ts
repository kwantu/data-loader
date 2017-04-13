export interface IOptions {
    object?: boolean;
    reversible?: boolean;
    coerce?: boolean;
    sanitize?: boolean;
    trim?: boolean;
    arrayNotation?: boolean;
    alternateTextNode?: boolean;
}
export declare function xmlToJSON(xml: string, options: IOptions): string;
