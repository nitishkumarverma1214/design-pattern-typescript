import { FileSystemComponent } from "./FileSystemComponent";

export class FileComponent implements FileSystemComponent{
    constructor(private name: string, private size: number){}
    getName(): string {
        return this.name;
    }
    getSize(): number {
        return this.size;
    }

}