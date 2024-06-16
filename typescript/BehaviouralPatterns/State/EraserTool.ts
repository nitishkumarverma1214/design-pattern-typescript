
import { Tool } from "./Tool";

export class EraserTool implements Tool{
    onMouseDown(): void {
       console.log(`Erase the canvas ...`);
    }
    onMouseUp(): void {
       console.log(`Stop the Erasing`);
    }

}