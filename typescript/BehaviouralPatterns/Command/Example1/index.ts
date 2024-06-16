import { Light } from "./Light";
import { SimpleeRemoteControl } from "./SimpleRemoteControl";
import { TurnOffCommand } from "./TurnOffComand";
import { TurnOnCommand } from "./TurnOnCommand";

export function commandPattern(){

    const simpleRemoteControl = new SimpleeRemoteControl();
    const light = new Light();

    simpleRemoteControl.setCommand(new TurnOnCommand(light));
    simpleRemoteControl.buttonWasPressed();
    simpleRemoteControl.setCommand(new TurnOffCommand(light));
    simpleRemoteControl.buttonWasPressed();
    simpleRemoteControl.undoButtonWasPress();
}