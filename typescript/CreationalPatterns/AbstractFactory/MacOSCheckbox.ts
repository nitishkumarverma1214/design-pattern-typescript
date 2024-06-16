import { IButton } from "./IButton";
import { ICheckbox } from "./ICheckbox";

export class MacOSCheckbox implements ICheckbox{
    constructor(private button: IButton){}
    render(): void {
        console.log("display the MacOS checkbox");
        
    }
    toggle(): void {
        this.button.onClick(()=> console.log("toggle the MacOS checkbox"));  
    }

}