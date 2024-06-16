import { ICommand } from "./ICommand";

export class UpdateFileCommand implements ICommand {
  constructor(private path: string, private newContent: string, private oldContent: string) {}
  execute(): void {
    console.log(`Updating the file: ${this.path}: removing the ${this.oldContent} and updating it with ${this.newContent}`)
  }
  undo(): void {
    console.log(`Undo the update command on file:${this.path}`)
  }
}
