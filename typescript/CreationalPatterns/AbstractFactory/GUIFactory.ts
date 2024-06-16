import { IButton } from "./IButton";
import { ICheckbox } from "./ICheckbox";

export interface GUIFactory{
    createButton(): IButton;
    createCheckbox(button: IButton): ICheckbox;
}