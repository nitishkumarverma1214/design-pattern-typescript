import { DatabaseAdapter } from "./DatabaseAdapter";
import { PostgreSQLDatabase } from "./PostgreSQLDatabase";

export function adapterPattern(){
    const postgreSQL= new PostgreSQLDatabase();
    const postgreSQLToMySQL  = new DatabaseAdapter(postgreSQL);
    postgreSQLToMySQL.connectToMySQL('postgre uri');
    postgreSQLToMySQL.excuteMySQLQuery('Find USER')
}