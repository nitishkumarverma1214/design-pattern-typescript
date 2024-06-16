import { ICommand } from "./ICommand";
import { Light } from "./Light";

export class TurnOnCommand implements ICommand{
  constructor(public light: Light) {}

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}
