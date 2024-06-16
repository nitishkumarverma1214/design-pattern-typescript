import { ShapeProperties } from "./ShapeProperties";

export abstract class Shape{

    constructor(public properties: ShapeProperties){}
    public abstract clone(): Shape;
}