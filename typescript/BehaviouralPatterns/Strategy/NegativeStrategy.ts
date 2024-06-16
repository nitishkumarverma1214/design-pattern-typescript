import { FilterStrategy } from "./FilterStrategy";

export class NegativeStrategy implements FilterStrategy{
    public apply(image: string): void {
        console.log(`appling the negative filter on ${image}`)
    }

}