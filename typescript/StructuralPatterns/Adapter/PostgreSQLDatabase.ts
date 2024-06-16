export class PostgreSQLDatabase{
    connectToPostgreSQL(uri: string): void{
        console.log('Connect to PostgreSQL database...')
    }
    executePostgreSQL(query: string): void{
        console.log(`execute the PostgreSQL query ${query}`)
    }
}