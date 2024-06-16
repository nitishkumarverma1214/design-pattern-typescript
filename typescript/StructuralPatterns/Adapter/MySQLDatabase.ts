export class MySQLDatabase{
    connectToMySQL(uri: string): void{
        console.log('Connect to MySQL database...')
    }
    executeMySQLQuery(query: string): void{
        console.log(`execute the MySQL query ${query}`)
    }
}