import { FilterStrategy } from "./FilterStrategy";

export class ImageProcessor{

    constructor(private strategy: FilterStrategy){}

    setFilterStrategy(strategy: FilterStrategy){
        this.strategy = strategy;
    }

    applyFilter(image: string): void{
        this.strategy.apply(image);
    }
}