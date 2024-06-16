import { Shape } from "./Shape";


export class Circle extends Shape {
  constructor(
    color: string,
    x: number,
    y: number,
    public radius: number,
  ) {
    super({ color, x, y });
  }
  public clone(): Shape {
    const clone = Object.assign({}, this);
    clone.properties = { ...this.properties};
    clone.radius = this.radius;
    return clone;
  }
}
