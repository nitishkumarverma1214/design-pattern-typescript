import { ICommand } from "./ICommand";

export class MyFileSystem {
  private commandQueue: ICommand[] = [];

  public addCommand(command: ICommand): void {
    this.commandQueue.push(command);
  }
  public executeCommand(): void {

    if(this.hasCommands()){
        this.commandQueue.shift()?.execute();
    }
  }
  public undoCommand(): void {
    this.commandQueue.pop()?.execute();
  }
  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}
