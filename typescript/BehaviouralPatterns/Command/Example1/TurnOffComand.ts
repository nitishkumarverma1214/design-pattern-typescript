import { ICommand } from "./ICommand";
import { Light } from "./Light";

export class TurnOffCommand implements ICommand{
  constructor(public light: Light) {}

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}
