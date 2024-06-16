import { IButton } from "./IButton";

export class WindowsButton implements IButton{
    render(): void {
       console.log('display the windows button')
    }
    onClick(callback: Function): void {
       console.log('performing click on windows');
       callback();
    }

}