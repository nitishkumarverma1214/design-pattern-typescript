import { Tool } from "./Tool";

export class BrushTool implements Tool{
    onMouseDown(): void {
       console.log(`Color the canvas area...`);
    }
    onMouseUp(): void {
       console.log(`Stop the coloring the canvas`);
    }

}