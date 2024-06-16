import { Shape } from "./Shape";

export class Rectangle extends Shape {
  constructor(
    color: string,
    x: number,
    y: number,
    public width: number,
    public height: number,
  ) {
    super({ color, x, y });
  }

  public clone(): Shape {
    const clone = Object.assign({}, this);
    clone.properties = { ...this.properties };
    clone.width = this.width;
    clone.height = this.height;
    return clone;
  }
}
