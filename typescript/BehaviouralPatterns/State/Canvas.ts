import { Tool } from "./Tool";

export class Canvas {
  constructor(private tool: Tool) {}
  public setTool(tool: Tool): void {
    this.tool = tool;
  }

  public onMouseDown(): void {
    this.tool.onMouseDown();
  }

  public onMouseUp(): void {
    this.tool.onMouseUp();
  }
}
