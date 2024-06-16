import { IButton } from "./IButton";

export class MacOSButton implements IButton{
    render(): void {
       console.log('display the mac os button')
    }
    onClick(callback: Function): void {
       console.log('performing click on Mac os');
       callback();
    }

}