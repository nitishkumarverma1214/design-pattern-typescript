import { FilterStrategy } from "./FilterStrategy";

export class SepiaStrategy implements FilterStrategy{
    public apply(image: string): void {
        console.log(`appling the sepia strategy filter on ${image}`)
    }

}