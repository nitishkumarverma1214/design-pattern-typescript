import { ICommand } from "./ICommand";

export class CreateFileCommand implements ICommand {
  constructor(private path: string) {}
  execute(): void {
    console.log(`creating a new file with path ${this.path}`);
  }
  undo(): void {
    console.log(`deleting the file with path ${this.path}`);
  }
}
