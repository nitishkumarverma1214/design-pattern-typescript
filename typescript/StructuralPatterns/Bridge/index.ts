import { ClientDatabaseService } from "./ClientDatabaseService";
import { MongoDBDatabase } from "./MongoDBDatabase";

export function bridgePattern(){

    const database = new MongoDBDatabase();
    const dbService = new ClientDatabaseService(database);
    dbService.fetchData(`Student.find({name: nitish})`)
}