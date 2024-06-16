import Database from "./Database";

export abstract class DatabaseService{

    constructor(protected database: Database){}
    public abstract fetchData(query: string): any;
}