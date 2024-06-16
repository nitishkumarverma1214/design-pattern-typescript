import { FileSystemComponent } from "./FileSystemComponent";

export interface CompositeFileSystemComponent extends FileSystemComponent {
    addComponent(component: FileSystemComponent): void;
    removeComponent(component: FileSystemComponent): void;
    getComponents(): FileSystemComponent[];
}
