import { ICommand } from "./ICommand";

export class SimpleeRemoteControl {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQueue: ICommand[] = [];

  public setCommand(command: ICommand) {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(command);
  }

  public buttonWasPressed(): void {
    if(this.hasCommand()){
        const command = this.commandQueue.shift();
        command?.execute();
    }
  }
  public undoButtonWasPress(): void {
    this.undoCommand?.execute();
  }
  public hasCommand(): boolean {
    return this.commandQueue.length > 0;
  }
}
