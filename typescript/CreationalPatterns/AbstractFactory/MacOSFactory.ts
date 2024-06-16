import { GUIFactory } from "./GUIFactory";
import { IButton } from "./IButton";
import { ICheckbox } from "./ICheckbox";
import { MacOSButton } from "./MacOSButton";
import { MacOSCheckbox } from "./MacOSCheckbox";

export class MacOSFactory implements GUIFactory{
    createButton(): IButton {
       return new MacOSButton();
    }
    createCheckbox(button: IButton): ICheckbox {
       return new MacOSCheckbox(button);
    }

}