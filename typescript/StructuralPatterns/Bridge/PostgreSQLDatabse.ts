import Database from "./Database";

export class PostgreSQLDatabase implements Database{
    connect(): void {
        console.log("connect to postgre database.")
    }
    query(query: string) {
        console.log("Running the postgre query", `${query}`)
    }
    close(): void {
        console.log("close connection with postgre")
    }
    
}