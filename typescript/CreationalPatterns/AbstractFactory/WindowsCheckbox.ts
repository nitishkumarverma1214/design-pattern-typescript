import { IButton } from "./IButton";
import { ICheckbox } from "./ICheckbox";

export class WindowsCheckbox implements ICheckbox{
    constructor(private button: IButton){}
    render(): void {
        console.log("display the windows checkbox");
        
    }
    toggle(): void {
        this.button.onClick(()=> console.log("toggle the windows checkbox"));
    }

}