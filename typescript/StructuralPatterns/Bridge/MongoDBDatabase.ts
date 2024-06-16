import Database from "./Database";

export class MongoDBDatabase implements Database{
    connect(): void {
       console.log("Connect to MongoDB")
    }
    query(query: string) {
       console.log("Running MongoDB query", `${query}`)
    }
    close(): void {
       console.log("Connection close with MongoDB")
    }

}