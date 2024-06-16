export default interface Database{
    connect(): void;
    query(query: string):any;
    close(): void;
}