import { ICommand } from "./ICommand";

export class ReadFileCommand implements ICommand{
    constructor(private path: string){}
    execute(): void {
       console.log(`Reading the file ${this.path}`)
    }
    undo(): void {
        console.log(`undo the read command on path: ${this.path}`)
    }

}