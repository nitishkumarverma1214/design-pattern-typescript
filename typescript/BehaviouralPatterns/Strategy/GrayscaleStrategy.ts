import { FilterStrategy } from "./FilterStrategy";

export class GrayscaleStrategy implements FilterStrategy{
    public apply(image: string): void {
       console.log(`appling the grayscale filter on ${image}`)
    }

}