import { GUIFactory } from "./GUIFactory";
import { IButton } from "./IButton";
import { ICheckbox } from "./ICheckbox";
import { WindowsButton } from "./WindowsButton";
import { WindowsCheckbox } from "./WindowsCheckbox";

export class WindowFactory implements GUIFactory{
    public createButton(): IButton {
       return new WindowsButton();
    }
    public createCheckbox(button: IButton): ICheckbox {
       return new WindowsCheckbox(button);
    }

}