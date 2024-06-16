import { Tool } from "./Tool";

export class SelectionTool implements Tool{
    onMouseDown(): void {
       console.log(`Select the canvas area...`);
    }
    onMouseUp(): void {
       console.log(`Release the mouse selection`)
    }

}