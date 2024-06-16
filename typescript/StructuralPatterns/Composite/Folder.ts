import { CompositeFileSystemComponent } from "./CompositeFileSystemComponent";
import { FileSystemComponent } from "./FileSystemComponent";

export class FolderComponent implements CompositeFileSystemComponent{
    constructor(private name: string, private components: FileSystemComponent[] =[]){}
    addComponent(component: FileSystemComponent): void {
       this.components.push(component);
    }
    removeComponent(component: FileSystemComponent): void {
       this.components = this.components.filter((c)=> c.getName() != component.getName())
    }
    getComponents(): FileSystemComponent[] {
       return this.components;
    }
    getName(): string {
       return this.name;
    }
    getSize(): number {
       return this.components.reduce((total, component)=> component.getSize(), 0);
    }
    
}