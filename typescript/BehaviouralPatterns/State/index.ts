import { BrushTool } from "./BrushTool";
import { Canvas } from "./Canvas";
import { EraserTool } from "./EraserTool";
import { SelectionTool } from "./SelectionTool";

export function statePattern(){

    const pointer = new Canvas(new BrushTool());
    pointer.onMouseDown();
    pointer.onMouseUp();

    pointer.setTool(new SelectionTool());
    pointer.onMouseDown();
    pointer.onMouseUp();


    pointer.setTool(new EraserTool());
    pointer.onMouseDown();
    pointer.onMouseUp();
}