import { PostgreSQLDatabase } from "./PostgreSQLDatabase";

export class DatabaseAdapter {
  constructor(private database: PostgreSQLDatabase) {}
  public connectToMySQL(uri: string): void {
    this.database.connectToPostgreSQL(uri);
  }
  public excuteMySQLQuery(query: string): void {
    this.database.executePostgreSQL(query);
  }
}
