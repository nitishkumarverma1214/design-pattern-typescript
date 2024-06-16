export abstract class DataParser{
    
    public parseData(data: string): void{
        this.loadData();
        const parseData = this.parse(data)
        this.validateData(parseData);
        this.useData(parseData)
    }

    private loadData(): void{
        console.log('loading the data....');
    }

    private validateData(parseData: any): void{
        console.log(`validate the parsed data: ${parseData}`)
    }

    private useData(parseData: any): void{
        console.log(`using the parse data: ${parseData}`)
    }

    protected abstract parse(data: string): any;
}